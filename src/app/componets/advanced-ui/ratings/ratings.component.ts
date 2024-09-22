import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from 'ngx-bar-rating';
import { FormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [SharedModule,NgbRatingModule,BarRatingModule,FormsModule,ReactiveFormsModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent {
  ctrl: UntypedFormControl;
  ctrl1: UntypedFormControl;
  constructor() {
    this.ctrl = new UntypedFormControl(null, Validators.required);
    this.ctrl1 = new UntypedFormControl(null, Validators.required);
  }
  starRate = 0;
  starRate1 = 0;
  starRate2 = 5;
  starRate3 = 0;
  starRate4 = 0;
  hovered = 0;
  hovered1 = 0;
  readonly = false;
  starRate6 = 0;
  selected = 0;
  ngOnInit(): void {}

  toggle = () => {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  };
  reset(){
    this.starRate6 = 0;
   }
   rating = 3.14;

	ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
}
