import { Component } from '@angular/core';
import { Education } from '../personel-information/Models/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationList:Education[]=[
    {
      institute:'NIT National Institute of Technology Sikkim',
      course:'B.tech',
      duration:'2017-21',
      score:'6.74'
    },
    {
      institute:'JNV- Phodong',
      course:'12th class',
      duration:'2014-16',
      score:'6.47'
    },
    {
      institute:'JNV- Phodong',
      course:'10th class',
      duration:'2014',
      score:'9.0 cgpa'
    },
    {
      institute:'NIT National Institute of Technology Sikkim',
      course:'B.tech',
      duration:'2017-21',
      score:'6.74'
    },

  ]
}
