import { Component, ElementRef, EnvironmentInjector, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderMenuItemComponent } from '../../../shared/layouts/page-header/header-menu-item/header-menu-item.component';  
import { AppService } from '../../../core/services/app.service';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { ApiUrls } from '../../../core/configs/api-urls';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { CommitteeCardComponent } from '../../../shared/components/committee-card/committee-card.component';


@Component({
  selector: 'app-governing-body-list',
  imports: [CommitteeCardComponent],
  templateUrl: './governing-body-list.component.html',
  styleUrl: './governing-body-list.component.scss'
})
export class GoverningBodyListComponent extends AppBaseComponent{
  govermentBodList: any[] = [];
  karobariMembers: any[] = [];
  previousZone: number = 0;
  @ViewChild('govermentBodyData', { read: ViewContainerRef, static: true }) govermentBodyData!: ViewContainerRef;
  @ViewChild('govermentBodyData', { read: ElementRef}) govermentBodyData1!: ElementRef;

  constructor(elementRef: ElementRef, simplify: SimplifyService, appService: AppService, private injector: Injector, private environmentInjector: EnvironmentInjector) {
    super(elementRef, simplify, appService);
    let headerMenuItemComponent = new HeaderMenuItemComponent();
    headerMenuItemComponent.changeMenuActiveStatus(AppService.appMenu[4].label);
    this.getGoverningBodyList();    
  }

  async getGoverningBodyList() {
    SimpleHttp.postPromise({url: ApiUrls.getCommitee})
      .then((response: any) => {
        if (response && response.records && response.records.length > 0) {
          response.records.forEach((group: any) => {
            let object = {};
            object["name"] = group["commitee_name"];
            object["showMemberPosition"] = false;
            if(group["commitee_name"] != undefined &&  group["commitee_name"] == "હોદેદારશ્રીઓ"){
              object["showMemberPosition"] = true;
              object["commitee_list"] = group["commitee_members"];
              this.govermentBodList.push(object);
              return;
            }
            if(group["commitee_name"] != undefined &&  group["commitee_name"] == "કારોબારી સભ્યશ્રીઓ"){
              let karobariMemberGroups = {};
              group["commitee_members"].forEach((member: any) => {
                if (!karobariMemberGroups[member["commitee_zone_name"]]) {
                  karobariMemberGroups[member["commitee_zone_name"]] = [];
                }
                karobariMemberGroups[member["commitee_zone_name"]].push(member);
              });
              this.karobariMembers = Object.values(karobariMemberGroups);
              return;
            }
            object["commitee_list"] = group["commitee_members"];
            this.govermentBodList.push(object);
          });      
          console.log('Governing body list:', this.govermentBodList);
          console.log('Karobari members:', this.karobariMembers);
          
        } else {
          this.govermentBodList = [];
        }
      })
      .catch((error: any) => {
        console.error('Error fetching governing body list:', error);
        this.govermentBodList = [];
        this.simplify.simpleAlertService.error('Failed to fetch governing body list.');
      });
  }
}
