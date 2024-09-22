import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbOffcanvas, OffcanvasDismissReasons,} from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/offcanvas'


@Component({
    selector: 'app-offcanvas',
    standalone: true,
    templateUrl: './offcanvas.component.html',
    styleUrl: './offcanvas.component.scss',
    providers: [NgbOffcanvas],
    imports: [SharedModule, ShowcodeCardComponent]
})
export class OffcanvasComponent {
  prismCode = prismCodeData;
  closeResult = '';
  constructor(private offcanvasService: NgbOffcanvas) {}
  open(content: any) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  openNoBackdrop(content: any) {
    this.offcanvasService.open(content, { backdrop: false });
  }
  openStaticBackdrop(content:any) {
    this.offcanvasService.open(content, { backdrop: 'static' });
  }
  EnableBackdrop(content: any) {
    this.offcanvasService.open(content, { scroll: false });
  }
  openTop(content: any) {
    this.offcanvasService.open(content, { position: 'top' });
  }
  openRight(content: any) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  openBottom(content: any) {
    this.offcanvasService.open(content, { position: 'bottom' });
  }


  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
