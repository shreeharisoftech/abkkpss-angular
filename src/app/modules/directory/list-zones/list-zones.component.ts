import { Component, ElementRef } from '@angular/core';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { ApiUrls } from '../../../core/configs/api-urls';
import { TblZones } from '../../../core/database/data-dictionary';
import { Router } from '@angular/router';
import { AppService } from '../../../core/services/app.service';

@Component({
  selector: 'app-list-zones',
  templateUrl: './list-zones.component.html',
  styleUrl: './list-zones.component.scss',
  standalone:false
})
export class ListZonesComponent extends AppBaseComponent{
  TblZones = TblZones;
  zones:any[] = [];

  constructor(private router: Router, elementRef: ElementRef, simplify: SimplifyService, appService: AppService) {
    super(elementRef, simplify, appService);
  }


  override ngOnInit(): void {
    super.ngOnInit();
    this.getZonesList();
  }

  async getZonesList(){
    let response:any = await SimpleHttp.getPromise({url:ApiUrls.getZones});
    if(response['status'] == 'success'){
      this.zones = response['records'];
    }
  }

  onZoneClick(zoneId:string){
    console.log('zoneId', zoneId);
    this.router.navigate(['/directory/directory-memberlist', zoneId]);
  }
}
