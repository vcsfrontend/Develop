import { Component ,Renderer2,ElementRef} from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgbModalConfig,NgbDropdownModule,NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule,FlatpickrDefaults  } from 'angularx-flatpickr';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
 tooltip: ApexTooltip;
 plotOptions: ApexPlotOptions;
 responsive: ApexResponsive[];
 fill:ApexFill;
 grid: any; //ApexGrid;
  colors: any;
  toolbar: any;

};
@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,NgApexchartsModule,FormsModule,NgSelectModule,FlatpickrModule,NgbModule],
  templateUrl: './list-view.component.html',
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults],
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal,private renderer: Renderer2, private el: ElementRef) {
   
  }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
  chartOptions:any= {
    series: [1754, 1234, 878, 270],
    labels: ["New Tasks", "Completed Tasks", "Pending Tasks", "Inprogress Tasks"],
    chart: {
        height: 300,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: true,
        position: "bottom",
        markers: {
            width: 5,
            height: 5,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined, 
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '97%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -4
                    },
                    value: {
                        show: true,
                        fontSize: '18px',
                        color: undefined,
                        offsetY: 8,
                        formatter: function (val: string) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total',
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#495057',
                    }

                }
            }
        }
    },
    colors: ["rgba(185, 78, 237, 1)", "rgba(83, 209, 255, 1)", "rgba(69, 214, 91, 1)", "rgba(255, 203, 83, 1)"],
  };
  selectedChoices: string[] = ['AngelinaMay'];

 

  ngAfterViewInit(): void {
    const taskBtns = this.el.nativeElement.querySelectorAll('.task-delete-btn');

    taskBtns.forEach((btn: HTMLElement) => {
      this.renderer.listen(btn, 'click', () => {
        const task = btn.closest('.task-list');
        if (task) {
          this.renderer.removeChild(task.parentNode, task);
        }
      });
    });
  }
}
