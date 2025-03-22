import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-menu-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header-menu-item.component.html',
  styleUrl: './header-menu-item.component.scss'
})
export class HeaderMenuItemComponent {
  @Input() depth:number = 0;
  @Input() menuItem:any = {};
  title:string = "";
  children:any[] = [];

  ngOnInit(){
    if(this.menuItem){
      console.log(this.menuItem);
      if(this.menuItem["label"]){
        this.title = this.menuItem["label"];
      }
      if(this.menuItem["children"]){
        this.children = this.menuItem["children"];
      }
    }
  }

  changeMenuActiveStatus(selectedMenu:string){
    document.querySelectorAll(".menu-item.divlink").forEach(element => {
      let menuTitleText = element.querySelector(".menu-title")?.textContent.trim();
      if(menuTitleText == selectedMenu){
          element.classList.add("active");
          return;
      }
      element.classList.remove("active");
      console.log(menuTitleText);
  });
  }
}
