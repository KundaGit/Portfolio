import { Component } from '@angular/core';

@Component({
  selector: 'app-personel-information',
  templateUrl: './personel-information.component.html',
  styleUrls: ['./personel-information.component.css']
})
export class PersonelInformationComponent {
  myData:string[][]=[
    ['Name','Kundan Rajak'],
    ['DOB','06/05/1997'],
    ['Work Experience','2 years'],
    ['Education','B.tech '],
    ['Interest','Coding and Playing football'],
    
  ];
  aboutMe:string[]=[
    'Hi i am a Software Development Engineer with 2 years of experience in software industry',
    'Worked as Team lead of software Development and i have the knowlwdge of Angulr Nodejs and mysql data base',
    'Deleverd all project within deadline .Alaways eager to learn new Technoogies.',
    'Currently working as Head of Captain america team'
  ];

}
