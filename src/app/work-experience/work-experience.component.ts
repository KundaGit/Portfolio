import { Component } from '@angular/core';
import { WorkExperience } from '../personel-information/Models/model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
workExpList:WorkExperience[]=[
  {
    role:'Software Developer',
    company:'Robomq company',
    duration:"july 2021-may 2023",
    description:[
      'Work with multiple teams to develop desktop and web application',
      'Work on different technologies such as (Angular , Nodejs, Html, css)',

    ]
    
  },
  {
    role:'Software Developer',
    company:'Robomq company',
    duration:"july 2021-may 2023",
    description:[
      'Work with multiple teams to develop desktop and web application',
      'Work on different technologies such as (Angular , Nodejs, Html, css)',
      
    ]
    
  }

]
}
