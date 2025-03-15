import { Component } from '@angular/core';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { NgForm } from '@angular/forms';
import { SimpleHttp } from '@satvasoftech/simplify-angular';
import { ApiUrls } from '../../../core/configs/api-urls';
import { Tables, TblUsers } from '../../../core/database/data-dictionary';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends AppBaseComponent {
  Tables = Tables;
  TblUsers = TblUsers;
  record:any = {};
  adminMembers:any[] = [];
  isFormSubmitted:boolean = false;

  override ngOnInit(): void {
    super.ngOnInit();
    this.getAdmins();
  }

  async getAdmins(){
    let response:any = await SimpleHttp.postPromise({url:ApiUrls.getUsers,data:{'admin_user':0}});
    if(response["status"] == "success"){
      this.adminMembers = response['records'];
    }
  }

  handleInputInit(event:any){
  }

  handleInputViewInit(event:any){
  }

  async handleSubmit(form: NgForm): Promise<void> {
    console.log(this.record,form.valid);
    this.isFormSubmitted = true;
    if(form.valid){
      let response:any = await SimpleHttp.postPromise({url:ApiUrls.login,data:{'username':this.record[TblUsers.userMobile],'password':this.record[TblUsers.userPassword]}});
      if(response["status"] == "success"){
        this.simplify.simpleAlertService.success('Member login successfull!');
      }
      else{
        this.simplify.simpleAlertService.error(response["message"]);
      }
    }
    // let rights: any = {};
    // this.setUserRightsObject({ "rights": this.rightsList }, rights);
    // this.record[TblAccessGroups.accessRights] = rights;
    // super.saveRecordForm(form);
  }
}
