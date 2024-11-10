
import { Component,OnInit } from '@angular/core';
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
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
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
  selector: 'app-hrm',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,NgbDropdownModule],
  templateUrl: './hrm.component.html',
  styleUrl: './hrm.component.scss'
})
export class HrmComponent {
  chartOptions:any = {
    series: [
      {
        name: "Applications Received",
        data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45],
      }
    ],
    chart: {
      type: "area",
      height: 230,
      toolbar: {
        show: false
      }
    },
    colors: [
      "rgb(69, 214, 91)"
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [0, 75]
      }
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "top",
    },
    stroke: {
      curve: 'stepline',
      width: [1]
    },
    yaxis: {
      min: 0,
      show: false
    },
    xaxis: {
      type: "month",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ],
      axisBorder: {
        show: false,
        color: "rgba(119, 119, 142, 0.05)",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "rgba(119, 119, 142, 0.05)",
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        rotate: -90,
      },
    },
  }
  chartOptions1:any = {
    series: [
      {
        name: "Hired",
        data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
      },
      {
        name: "Rejected",
        data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      fontFamily: "'Poppins', sans-serif",
      height: 353,
      stacked: true,
    },
    colors: ["rgb(69, 214, 91)", "var(--primary-color)"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "2%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "top",
      offsetX: 0,
      offsetY: 8,
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
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
  
    },
    yaxis: {
      tickAmount: 4,
    },
  };
  chartOptions2:any = {
    series: [1454, 1234],
    labels: ["Male", "Female"],
    chart: {
      height: 250,
      type: 'donut'
    },
    dataLabels: {
      enabled: false,
    },
  
    legend: {
      show: false,
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
        startAngle: 0,
        endAngle: 360,
        expandOnClick: false,
        donut: {
          size: '99%',
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
    colors: ["var(--primary-color)", "rgba(69, 214, 91, 1)"],
  
  };
}
