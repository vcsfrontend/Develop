import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ToastService } from './toasts.service';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismcodeData from '../../../shared/prismData/toasts';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [SharedModule,NgbToastModule, ShowcodeCardComponent],
    providers: [{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.scss'
})
export class ToastsComponent implements OnInit  {
  @ViewChild('toastContainer') toastContainer!: ElementRef;
  prismCode = prismcodeData;

  show0 = false;
  autohide = true;

  constructor(
    public toastService: ToastService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}

  toasts: { autohide: boolean }[] = [];
  toasts1: { autohide: boolean }[] = [];
  toasts2: { autohide: boolean }[] = [];
  toasts3: { autohide: boolean }[] = [];
  toasts4: { autohide: boolean }[] = [];
  toasts5: { autohide: boolean }[] = [];
  toasts6: { autohide: boolean }[] = [];
  toastsA: { autohide: boolean }[] = [];
  toastsB: { autohide: boolean }[] = [];
  toastsC: { autohide: boolean }[] = [];
  toastsD: { autohide: boolean }[] = [];
  toastsE: { autohide: boolean }[] = [];
  toastsF: { autohide: boolean }[] = [];
  toasts7: { autohide: boolean }[] = [];
  toasts8: { autohide: boolean }[] = [];
  toasts9: { autohide: boolean }[] = [];
  toasts10: { autohide: boolean }[] = [];
  toasts11: { autohide: boolean }[] = [];
  toasts12: { autohide: boolean }[] = [];
  toasts13: { autohide: boolean }[] = [];
  toasts14: { autohide: boolean }[] = [];
  toasts15: { autohide: boolean }[] = [];

    show = true;
    show1 = true;
    show2 = true;
    show3 = true;
    show4 = true;
    show5 =true;
    show6 =true;
    show7 =true;
    show8 =true;
    show9 =true;
    show10 =true;
    show11 =true;
    showToast() {
      const newToast = { autohide: true };
      this.toasts.push(newToast);
    }
    hideToast(toast: { autohide: boolean }) {
      this.toasts = this.toasts.filter((t) => t !== toast);
    }
    showToastprimary() {
      const newToast = { autohide: true };
      this.toasts1.push(newToast);
    }
    hideToastprimary(toast1: { autohide: boolean }) {
      this.toasts1 = this.toasts1.filter((t) => t !== toast1);
    }
    showToastseconday() {
      const newToast = { autohide: true };
      this.toasts2.push(newToast);
    }
    hideToastsecondary(toast: { autohide: boolean }) {
      this.toasts2 = this.toasts2.filter((t) => t !== toast);
    }
    showToastwarning() {
      const newToast = { autohide: true };
      this.toasts3.push(newToast);
    }
    hideToastwarning(toast: { autohide: boolean }) {
      this.toasts3 = this.toasts3.filter((t) => t !== toast);
    }
    showToastinfo() {
      const newToast = { autohide: true };
      this.toasts4.push(newToast);
    }
    hideToastinfo(toast: { autohide: boolean }) {
      this.toasts4 = this.toasts4.filter((t) => t !== toast);
    }
    showToastsuccess() {
      const newToast = { autohide: true };
      this.toasts5.push(newToast);
    }
    hideToastsuccess(toast: { autohide: boolean }) {
      this.toasts5 = this.toasts5.filter((t) => t !== toast);
    }
    showToastdanger() {
      const newToast = { autohide: true };
      this.toasts6.push(newToast);
    }
    hideToastdanger(toast: { autohide: boolean }) {
      this.toasts6 = this.toasts6.filter((t) => t !== toast);
    }
    //solid toast
    SolidToastprimary() {
      const newToast = { autohide: true };
      this.toastsA.push(newToast);
    }
  
    SolidToastsecondary() {
      const newToast = { autohide: true };
      this.toastsB.push(newToast);
    }
    SolidToastwarning() {
      const newToast = { autohide: true };
      this.toastsC.push(newToast);
    }
    SolidToastinfo() {
      const newToast = { autohide: true };
      this.toastsD.push(newToast);
    }
    SolidToastsuccess() {
      const newToast = { autohide: true };
      this.toastsE.push(newToast);
    }
    SolidToastdanger() {
      const newToast = { autohide: true };
      this.toastsF.push(newToast);
    }
    hideSolidToastprimary(toastA: { autohide: boolean }) {
      this.toastsA = this.toastsA.filter((t) => t !== toastA);
    }
    hideSolidToastsecondary(toast: { autohide: boolean }) {
      this.toastsB = this.toasts2.filter((t) => t !== toast);
    }
    hideSolidToastwarning(toast: { autohide: boolean }) {
      this.toastsC = this.toasts3.filter((t) => t !== toast);
    }
    hideSolidToastinfo(toast: { autohide: boolean }) {
      this.toastsD = this.toasts4.filter((t) => t !== toast);
    }
    hideSolidToastsuccess(toast: { autohide: boolean }) {
      this.toastsE = this.toasts5.filter((t) => t !== toast);
    }
    hideSolidToastdanger(toast: { autohide: boolean }) {
      
      this.toastsF = this.toasts6.filter((t) => t !== toast);
      
    }

    TopLeft() {
      const newToast = { autohide: true };
      this.toasts7.push(newToast);
    }
    toplefthideToast(toast7: { autohide: boolean }) {
      this.toasts7 = this.toastsA.filter((t) => t !== toast7);
    }
    TopCenter() {
      const newToast = { autohide: true };
      this.toasts8.push(newToast);
    }
    TopCenterhideToast(toast7: { autohide: boolean }) {
      this.toasts8 = this.toastsA.filter((t) => t !== toast7);
    }
    TopRight() {
      const newToast = { autohide: true };
      this.toasts9.push(newToast);
    }
    TopRighthideToast(toast7: { autohide: boolean }) {
      this.toasts9 = this.toastsA.filter((t) => t !== toast7);
    }
    MiddleLeft() {
      const newToast = { autohide: true };
      this.toasts10.push(newToast);
    }
    MiddleLefthideToast(toast7: { autohide: boolean }) {
      this.toasts10 = this.toastsA.filter((t) => t !== toast7);
    }
    MiddleCenter() {
      const newToast = { autohide: true };
      this.toasts11.push(newToast);
    }
    MiddleCenterhideToast(toast7: { autohide: boolean }) {
      this.toasts11 = this.toastsA.filter((t) => t !== toast7);
    }
    MiddleRight() {
      const newToast = { autohide: true };
      this.toasts12.push(newToast);
    }
    MiddleRighthideToast(toast7: { autohide: boolean }) {
      this.toasts12 = this.toastsA.filter((t) => t !== toast7);
    }
    BottomLeft() {
      const newToast = { autohide: true };
      this.toasts13.push(newToast);
    }
    BottomLefthideToast(toast7: { autohide: boolean }) {
      this.toasts13 = this.toastsA.filter((t) => t !== toast7);
    }
    BottomCenter() {
      const newToast = { autohide: true };
      this.toasts14.push(newToast);
    }
    BottomCenterthideToast(toast7: { autohide: boolean }) {
      this.toasts14 = this.toastsA.filter((t) => t !== toast7);
    }
    BottomRight() {
      const newToast = { autohide: true };
      this.toasts15.push(newToast);
    }
    BottomRighthideToast(toast7: { autohide: boolean }) {
      this.toasts15 = this.toastsA.filter((t) => t !== toast7);
    }
}