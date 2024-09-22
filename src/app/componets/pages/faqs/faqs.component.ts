import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbAccordionConfig,NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [SharedModule,NgbCollapseModule,NgbAccordionModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  panels = ['Where can I subscribe to your newsletter?', 'Where can in edit my address?', 'What are your opening hours?','Do I have the right to return an item?'];
  panels1 = ['What is the order procedure?', 'How and when do I receive the invoices?', 'Which method of ordering is best for me?','What does an order cost?'];

  isCollapsed = true;
}
