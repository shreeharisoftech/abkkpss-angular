import { Component } from '@angular/core';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { SimpleHttp } from '@satvasoftech/simplify-angular';
import { ApiUrls } from '../../../core/configs/api-urls';
import { TblZones } from '../../../core/database/data-dictionary';

@Component({
  selector: 'app-list-zones',
  templateUrl: './list-zones.component.html',
  styleUrl: './list-zones.component.scss',
  standalone:false
})
export class ListZonesComponent extends AppBaseComponent{
  TblZones = TblZones;
  zones:any[] = [];
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
}
