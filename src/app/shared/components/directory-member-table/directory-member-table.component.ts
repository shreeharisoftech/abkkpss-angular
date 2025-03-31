import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ViewMemberDetails } from '../../../core/database/data-dictionary';
import { Router } from '@angular/router';
import { SimpleHttp } from '@satvasoftech/simplify-angular';
import { ApiUrls } from '../../../core/configs/api-urls';

@Component({
  selector: 'app-directory-member-table',
  templateUrl: './directory-member-table.component.html',
  styleUrl: './directory-member-table.component.scss',
  imports: [CommonModule],
})
export class DirectoryMemberTableComponent {
  @Input() data: any = {};
  ViewMembersDetails = ViewMemberDetails;
  mainImage = 'assets/images/icons/male_125.jpg';
  mainSpouseImage = 'assets/images/icons/female_125.jpg';
  showMainImage = true;
  showSpouseImage = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkMemberImages();
  }

  getFormattedDate(birthDay: number | null | undefined, birthMonth: number | null | undefined, birthYear: number | null | undefined): string {
    if (birthDay == null || birthMonth == null || birthYear == null) {
      return '-';
    }
    return `${birthDay}/${birthMonth}/${birthYear}`;
  }

  private async checkMemberImages(): Promise<void> {
    let spouseId: string = '';
    if (Array.isArray(this.data) && this.data.length > 0) {
      this.data.forEach((member: any) => {
        if (member?.[this.ViewMembersDetails.mainId] === member?.[this.ViewMembersDetails.memberId]) {
          const profilePic = member?.[this.ViewMembersDetails.memberProfilePic];
          if (profilePic) {
            console.log('Profile picture found:', profilePic);
            const parsedData = JSON.parse(profilePic);
            console.log('Parsed profile picture:', parsedData);
            this.mainImage = ApiUrls.baseApiUrl + parsedData.media_url;
          } else {
            const gender = member?.[this.ViewMembersDetails.memberGender];
            this.mainImage = gender === 'M' ? 'assets/images/icons/male_125.jpg' : 'assets/images/icons/female_125.jpg';
          }
          if (member?.[this.ViewMembersDetails.spouseId]) {
            this.showSpouseImage = true;
            spouseId = member?.[this.ViewMembersDetails.spouseId];
          }
        }
      });
    } else {
      console.warn('Data is not an array or is empty');
    }

    if (spouseId) {
      try {
        let formDataObj = new FormData();
        formDataObj.append('member_id', spouseId);
        formDataObj.append('add_log', 'true');
  
        const response: any = await SimpleHttp.postPromise({
          url: `${ApiUrls.getMembers}`,
          formData: formDataObj,
        });
        if (response && response.status === 'success' && response.records && response.records.length > 0) {
          const spouseProfilePic = response.records[0]?.[this.ViewMembersDetails.memberProfilePic];
          if (spouseProfilePic) {
            const parsedData = JSON.parse(spouseProfilePic);
            this.mainSpouseImage = ApiUrls.baseApiUrl + parsedData.media_url || 'assets/images/icons/female_125.jpg';
          } else {
            console.warn('Spouse profile picture not found in API response');
          }
        } else {
          console.warn('No records found for spouse in API response');
        }
      } catch (error) {
        console.error('Error fetching spouse profile image:', error);
      }
    } else {
      this.showSpouseImage = false;
    }
  }

  public showMemberDetails(memberId: string): void {
    // Logic to show member details goes here
    console.log('Showing details for member ID:', memberId);
    this.router.navigate(["/members/member-detail",memberId]);
  }
}

