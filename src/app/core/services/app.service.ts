import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimpleHttp } from '@satvasoftech/simplify-angular';
import { ApiUrls } from '../configs/api-urls';

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
  ];
  fetchCount = 50;
  simpleHttp:SimpleHttp = new SimpleHttp();
  constructor() {
  }

  getProfileImagePath(profilePic: string, memberGender: string): string {
      try {
        const parsedData = JSON.parse(profilePic); // Parse the JSON string
        return ApiUrls.baseApiUrl + parsedData.media_url || ''; // Return the `media_url` or an empty string if not found
      } catch (error) {
        if(memberGender == 'M'){
          return "assets/images/icons/male_125.jpg";
        }else{
          return "assets/images/icons/female_125.jpg"; // Return an empty string in case of an error
        }
      }
    }
}
