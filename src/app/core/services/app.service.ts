import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimpleHttp } from '@satvasoftech/simplify-angular';
import { ApiUrls } from '../configs/api-urls';
import { ViewMemberDetails, ViewUsers } from '../database/data-dictionary';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  static appMenu:any[] = [
    {
      "iconClass":"far fa-address-book",
      "label":"Directory",
      "link":"directory"
    },
    {
      "iconClass":"far fa-users",
      "label":"Members",
      "link":"members"
    },
    {
      "iconClass":"far fa-building",
      "label":"Firms",
      "link":"firms"
    },
    {
      "iconClass":"far fa-rings-wedding",
      "label":"Matrimony",
      "link":"matrimony"
    },
    {
      "iconClass":"ki-filled ki-people text-base",
      "label":"Governing Body",
      "link":"governing-body"
    },
  ];

  fetchCount = 50;
  static isLoggedIn: boolean = false;
  simpleHttp:SimpleHttp = new SimpleHttp();
  constructor() {
    if(sessionStorage.getItem('user')){
      AppService.isLoggedIn = true;
    }
  }

  getProfileImagePath(profilePic: string, memberGender: string): string {
    try {
      const parsedData = JSON.parse(profilePic); // Parse the JSON string
      return ApiUrls.baseApiUrl + parsedData.media_url || ''; // Return the `media_url` or an empty string if not found
    } catch (error) {
      if(memberGender == 'M'){
        return "assets/images/icons/male_125.jpg";
      }else if(memberGender == 'O'){
        return "assets/images/icons/firm_125.jpg";
      }else{
        return "assets/images/icons/female_125.jpg";
      }
    }
  }

  getMemberShabiyaPadColorClass(isLifetime: number | null, memberType: string, forBackground?: boolean): string {
    if (isLifetime) {
      return memberType === 'Member'
        ? (forBackground ? 'bg-green-500' : 'border-green-500')
        : (forBackground ? 'bg-red-500' : 'border-red-500');
    } else {
      return 'border-gray-500';
    }
  }

  closeProfileDialog(){
    document.getElementById('headerProfileAvatarBadge').click();
  }

  checkUserAccess(data): boolean {
    let isProhibited: boolean = true;
    if(sessionStorage.length > 0){
      let memberData = JSON.parse(sessionStorage.getItem('member'));
      let userData = JSON.parse(sessionStorage.getItem('user'));
      if(memberData[ViewMemberDetails.mainId] != null){
        if(data[ViewMemberDetails.memberId] == memberData[ViewMemberDetails.memberId]){
          isProhibited = false;
        }else if(data[ViewMemberDetails.mainId] == memberData[ViewMemberDetails.mainId]){
          isProhibited = false;
        }else if(userData != null && userData != undefined){
          if(userData[ViewUsers.userType]==2||userData[ViewUsers.userType]==-1){
            isProhibited = false;
          }else if(userData[ViewUsers.userType]==1){
            if(memberData[ViewMemberDetails.zoneId]==data[ViewMemberDetails.zoneId]){
              isProhibited = false;
            }
          }
        }
      }
    }
    return !isProhibited;
  }

  fetchDistinctFieldData(fieldName: string, recordType:string): Promise<string[]> {
    const formDataObj = new FormData();
    formDataObj.append('record_type', recordType);
    formDataObj.append('operation', 'SELECT');
    formDataObj.append('select_distinct_field', fieldName);

    return fetch(`${ApiUrls.baseApiUrl}api${ApiUrls.performOperation}`, {
      method: 'POST',
      body: formDataObj,
      credentials: 'include',
    })
      .then(response => response.json())
      .then(result => result.records.map((item: any) => item[fieldName]))
      .catch(error => {
        console.error(`Error fetching distinct field data for ${fieldName}:`, error);
        return [];
      });
  }
}
