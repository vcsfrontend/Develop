import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';

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
const DATA=[
  {
    img:"./assets/images/faces/11.jpg",
    Name:'Json Taylor',
    Mail:'jsontaylor2416@gmail.com',
    Id:'#SPK12032901',
    IssuedDate:'25,Nov 2022',
    Price:'$212.45',
    bg:'success-transparent',
    text:'success',
    Status:'Paid',
    DueDate:'25,Dec 2022'
  },
  {
    img:"./assets/images/faces/7.jpg",
    Name:'Suzika Stallone',
    Mail:'suzikastallone3214@gmail.com',
    Id:'#SPK12032912',
    IssuedDate:' 13,Nov 2023',
    Price:'$512.99',
    bg:'warning-transparent',
    text:'warning',
    Status:'Pending',
    DueDate:'13,Dec 2023'
  },
  {
    img:"./assets/images/faces/15.jpg",
    Name:'Roman Killon',
    Mail:'romankillon143@gmail.com',
    Id:'#SPK12032945',
    IssuedDate:' 30,Nov 2023',
    Price:'  $2199.49',
    bg:'danger-transparent',
    text:'danger',
    Status:'Overdue',
    DueDate:'  30,Dec 2023'
  },
  {
    img:"./assets/images/faces/12.jpg",
    Name:'Charlie Davieson',
    Mail:'charliedavieson@gmail.com',
    Id:'#SPK12032922',
    IssuedDate:' 18,Nov 2023',
    Price:'  $1569.99',
    bg:'success-transparent',
    text:'success',
    Status:'Paid',
    DueDate:'  18,Dec 2023'
  },
  {
    img:"./assets/images/faces/4.jpg",
    Name:'Selena Deoyl',
    Mail:'selenadeoyl114@gmail.com',
    Id:'#SPK12032932',
    IssuedDate:' 18,Nov 2023',
    Price:'  $4,873.99',
    bg:'primary-transparent',
    text:'primary',
    Status:'Due By 1 Day',
    DueDate:'  18,Dec 2023'
  },
  {
    img:"./assets/images/faces/7.jpg",
    Name:'Kiara Advensh',
    Mail:'kiaraadvensh87@gmail.com',
    Id:'#SPK12032978',
    IssuedDate:'  02,Nov 2023',
    Price:'  $1923.99',
    bg:'success-transparent',
    text:'success',
    Status:'Paid',
    DueDate:'  18,Dec 2023'
  },
  {
    img:"./assets/images/faces/7.jpg",
    Name:'Joseph Samurai',
    Mail:'josephsamurai@gmail.com',
    Id:'#SPK12032919',
    IssuedDate:'15,Nov 2023',
    Price:'$1,623.99',
    bg:'success-transparent',
    text:'success',
    Status:'Paid',
    DueDate:'  15,Dec 2023'
  },
  {
    img:"./assets/images/faces/7.jpg",
    Name:'Kevin Powell',
    Mail:'kevinpowell@gmail.com',
    Id:'#SPK12032931',
    IssuedDate:'21,Nov 2023',
    Price:'$3,423.99',
    bg:'warning-transparent',
    text:'warning',
    Status:'Pending',
    DueDate:'  21,Dec 2023'
  },
  {
    img:"./assets/images/faces/8.jpg",
    Name:'Darla Jung',
    Mail:'darlajung555@gmail.com',
    Id:'#SPK12032958',
    IssuedDate:'15,Oct 2023',
    Price:'$2,982.99',
    bg:'success-transparent',
    text:'success',
    Status:'Paid',
    DueDate:'15,Nov 2023'
  },
]

@Component({
  selector: 'app-invoicelist',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,NgApexchartsModule,CountUpModule],
  templateUrl: './invoicelist.component.html',
  styleUrl: './invoicelist.component.scss'
})
export class InvoicelistComponent {
  invoices=DATA
  click(id:string){
    const data = this.invoices.filter((x: { Price: string }) => {
      return x.Price != id;
  
    })
    this.invoices = data;

}
chartOptions:any= {
  series: [1754, 1234, 878, 270],
  labels: ["Total Invoices", "Paid Invoices", "Pending Invoices", "Overdue Invoices"],
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
                      formatter: function (val:any) {
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
}
