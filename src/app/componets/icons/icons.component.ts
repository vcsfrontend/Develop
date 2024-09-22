import { Component } from '@angular/core';
import { SharedModule } from '../../shared/common/sharedmodule';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-icons',
    standalone: true,
    templateUrl: './icons.component.html',
    styleUrl: './icons.component.scss',
    imports: [SharedModule, NgbTooltipModule]
})
export class IconsComponent {

}
