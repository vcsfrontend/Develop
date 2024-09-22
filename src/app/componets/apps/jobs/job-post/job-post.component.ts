import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule } from '@angular/forms';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
@Component({
  selector: 'app-job-post',
  standalone: true,
  imports: [SharedModule, NgSelectModule, FormsModule,FlatpickrModule],
  providers:[FlatpickrDefaults],
  templateUrl: './job-post.component.html',
  styleUrl: './job-post.component.scss'
})
export class JobPostComponent {
  selectedLanguages=['English'];
  languages=[
    {id:1,name:'French'},
    {id:2,name:'Arabic'},
    {id:3,name:'Hindi'},
    
  ]
  selectedQualifications=['Graduate'];
  Qualifications=[
    {id:1,name:'Diploma'},
    {id:2,name:'MBA'},
    {id:3,name:'MCA'},
    
  ]
  selectedSkills=['HTML'];
  Skills=[
    {id:1,name:'CSS'},
    {id:2,name:'JavaScript'},
    {id:3,name:'React'},
    
  ]
}
