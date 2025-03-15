import { Component } from '@angular/core';
import { SimpleDatabaseInputTemplateComponent } from '@satvasoftech/simplify-angular';

@Component({
  selector: 'app-app-database-input-template',
  templateUrl: './app-database-input-template.component.html',
  styleUrl: './app-database-input-template.component.scss',
  standalone:false
})
export class AppDatabaseInputTemplateComponent extends SimpleDatabaseInputTemplateComponent{
  consoleMessage:boolean = false;
  get inputFor():string {
    let result:string = "form";
    if(this.additionalDetails){
      if(this.additionalDetails["inputFor"]){
        result = this.additionalDetails["inputFor"];
      }
    }
    return result;
  }
  get errorMessage():string{
    let result:string = "";
    if(this.simpleDatabaseInput){
      if(this.simpleDatabaseInput.formSubmitted){
        let errors:any = this.simpleDatabaseInput.errors;
        if(Object.keys(errors).length>0){
          if(errors["required"]){
            result = "Required";
            if(!this.consoleMessage){
              console.log(this);
              this.consoleMessage = true;
            }
          }
        }
        else{
          this.consoleMessage = false;
        }
      }
    }
    return result;
  }

  override inputProperties: any = {class:'input'};

  override ngOnInit(): void {
    super.ngOnInit();
    console.log(this);
  }
}
