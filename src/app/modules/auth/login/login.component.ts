import { Component, ElementRef, ɵresetJitOptions } from '@angular/core';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { NgForm } from '@angular/forms';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { ApiUrls } from '../../../core/configs/api-urls';
import { Tables, TblUsers } from '../../../core/database/data-dictionary';
import { Router } from '@angular/router';
import { AppService } from '../../../core/services/app.service';
import { HeaderMenuItemComponent } from '../../../shared/layouts/page-header/header-menu-item/header-menu-item.component';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  constructor(private router: Router, elementRef: ElementRef, simplify: SimplifyService, appService: AppService, private http: HttpClient) {
    super(elementRef, simplify, appService);
    let headerComponent = new HeaderMenuItemComponent();
    headerComponent.changeMenuActiveStatus("Login");
  }

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
      try {
        // const response: any = await this.http.post(ApiUrls.login, {
        //   username: this.record[TblUsers.userMobile],
        //   password: this.record[TblUsers.userPassword]
        // }).toPromise();
        const body = new HttpParams()
          .set('username', this.record[TblUsers.userMobile])
          .set('password', this.record[TblUsers.userPassword]);

          const url = ApiUrls.baseApiUrl + 'api' + ApiUrls.login;

          const formData = new URLSearchParams();
          formData.append('username', this.record[TblUsers.userMobile]);
          formData.append('password', this.record[TblUsers.userPassword]);
          
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
            credentials: 'include'  // equivalent to withCredentials: true
          })
          .then(response => response.json())
          .then(response => {
            console.log('Login response:', response);
            if (response.status === "success") {
              this.simplify.simpleAlertService.success('Member login successful!');
              sessionStorage.setItem('user', JSON.stringify(response.user));
              sessionStorage.setItem('member', JSON.stringify(response.member));
              AppService.isLoggedIn = true;
              this.router.navigate(['/']);
            } else {
              this.simplify.simpleAlertService.error(response.message);
            }
          })
          .catch(error => {
            console.error('Error during login:', error);
            this.simplify.simpleAlertService.error('An error occurred during login.');
          });
          

        // if (response["status"] === "success") {
        //   this.simplify.simpleAlertService.success('Member login successful!');
        //   sessionStorage.setItem('user', JSON.stringify(response['user']));
        //   sessionStorage.setItem('member', JSON.stringify(response['member']));
        //   AppService.isLoggedIn = true;
        //   this.router.navigate(['/']);
        // } else {
        //   this.simplify.simpleAlertService.error(response["message"]);
        // }
      } catch (error) {
        console.error('Error during login:', error);
        this.simplify.simpleAlertService.error('An error occurred during login.');
      }
    }
    // let rights: any = {};
    // this.setUserRightsObject({ "rights": this.rightsList }, rights);
    // this.record[TblAccessGroups.accessRights] = rights;
    // super.saveRecordForm(form);
  }
}
