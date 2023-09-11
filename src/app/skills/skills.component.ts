import { Component } from '@angular/core';
import { Skill } from '../personel-information/Models/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
 skills: Skill[]=[
{
  name:'Anaguar, Angualr Material',
  level:'Expert',
  rating:85,
},
{
  name:'Nodejs, Javascript',
  level:'Intermideate',
  rating:90,
},
{
  name:'HTML, CSS , DOM',
  level:'Expert',
  rating:80,
},

{
  name:'Mysql, GIT , JIRA',
  level:'Expert',
  rating:90,
},
]
}
