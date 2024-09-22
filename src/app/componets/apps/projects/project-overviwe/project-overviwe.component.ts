import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-project-overviwe',
  standalone: true,
  imports: [SharedModule,RouterModule,NgbTooltipModule,NgbModule],
  templateUrl: './project-overviwe.component.html',
  styleUrl: './project-overviwe.component.scss'
})
export class ProjectOverviweComponent {

}
