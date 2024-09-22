import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [SharedModule,NgSelectModule,NgApexchartsModule],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.scss'
})
export class BuySellComponent {
  chartOptions:any={
    series: [{
      name: "Buy",
      data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
  }, {
      name: "Sell",
      data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
  }],
  chart: {
      height: 300,
      type: 'bar',
      zoom: {
          enabled: false
      },
  },
  plotOptions: {
      bar: {
          columnWidth: "15%",
          borderRadius: 2
      }
  },
  dataLabels: {
      enabled: false
  },
  legend: {
      position: "top",
      horizontalAlign: "center",
      offsetX: -15,
      fontWeight: "bold",
  },
  stroke: {
      curve: 'smooth',
      width: ["1","1"],
  },
  grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3
  },
  colors: ["rgb(185, 78, 237)", "rgba(69, 214, 91, 1)"],
  yaxis: {
      title: {
          text: 'Statistics',
          style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
          },
      },
  },
  xaxis: {
      type: 'month',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
          show: true,
          color: 'rgba(119, 119, 142, 0.05)',
          offsetX: 0,
          offsetY: 0,
      },
      axisTicks: {
          show: true,
          borderType: 'solid',
          color: 'rgba(119, 119, 142, 0.05)',
          width: 6,
          offsetX: 0,
          offsetY: 0
      },
      labels: {
          rotate: -90
      }
  }
  }

}
