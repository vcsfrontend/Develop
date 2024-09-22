
import { SharedModule } from '../../shared/common/sharedmodule';
import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
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
import { NgbDropdownModule,NgbNavModule  } from '@ng-bootstrap/ng-bootstrap';
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
  selector: 'app-widgets',
  standalone: true,
  templateUrl: './widgets.component.html',
  imports: [SharedModule,NgApexchartsModule,LeafletModule,NgbDropdownModule,NgbNavModule ],
  styleUrl: './widgets.component.scss',
})
export class WidgetsComponent  implements OnInit {
  chart1options:any;
  layers1!: L.Layer[];
  seriesName:any
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    //leaflet maps 1
    const map = L.map('users-map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap',
    }).addTo(map);
  }
 
  chartOptions3:any = {
    series: [
        {
            data: [10, 30, 25, 40, 10, 25, 40, 10, 20, 5]
        },
    ],
    chart: {
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: '#5e76a6',
            opacity: 0.3
        },
        type: 'line',
        height: 40,
        width: 100
    },
    tooltip: {
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName:any) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['rgb(185, 78, 237)'],
    stroke: {
        width: [1],
        curve: ['smooth'],
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },

};
chartOptions13:any = {
    series: [
        {
            data: [10, 30, 20, 40, 10, 15, 40, 30, 3, 30]
        },
    ],
    chart: {
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: '#5e76a6',
            opacity: 0.3
        },
        type: 'line',
        height: 40,
        width: 100
    },
    tooltip: {
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName: any) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['rgb(237, 78, 131)'],
    stroke: {
        width: [1],
        curve: ['smooth'],
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },

};
chartOptions4:any = {
  series: [
      {
          data: [10, 30, 20, 40, 10, 15, 40, 30, 3, 30]
      },
  ],
  chart: {
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 3,
          right: 6,
          blur: 3,
          color: '#5e76a6',
          opacity: 0.3
      },
      type: 'line',
      height: 40,
      width: 100
  },
  tooltip: {
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName:any) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  },
  colors: ['rgb(70, 178, 201)'],
  stroke: {
      width: [1],
      curve: ['smooth'],
  },
  xaxis: {
      crosshairs: {
          show: false,
      }
  },

};
  
chartOptions:any = {
    series: [
        {
            data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23, 20, 22, 25, 25, 22, 24, 23, 26, 25, 27,],
            type: 'line',
        }, 
        {
            data: [20, 23, 26, 22, 20, 26, 28, 26, 22, 27, 25, 26, 24, 20, 19, 19, 22, 20, 22, 21, 20, 19,],
            type: 'bar',
        },
    ],
    chart: {
        height: 380,
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false,
        show: true,
        position: 'top',
    },
    plotOptions: {
        bar: {
            borderRadius: 2,
            dataLabels: {
            },
            columnWidth: '10%'
        }
    },
    colors: [
        'rgb(69, 214, 91)',
        "rgba(185, 78, 237, 1)" ],
    stroke: {
        curve: ['smooth', 'stepline'],
        width: [1,0],
        dashArray: [0, 0],
    },
    grid: {
        borderColor: '#f3f3f3',
        strokeDashArray: 3
    },
    xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        }
    }
};
  chartOptions5:any = {
    series: [
      {
          data: [34, 55, 41, 67, 22, 43, 21]
      },
  ],
  chart: {
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 3,
          right: 6,
          blur: 3,
          color: ['#47bbed'],
          opacity: 0.2
      },
      type: 'line',
      height: 20,
      width: 100
  },
  tooltip: {
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName:any) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  },
  colors: ["#47bbed"],
  stroke: {
      width: [1],
      curve: ['smooth'],
  },
  xaxis: {
      crosshairs: {
          show: false,
      }
  },
  fill: {
      type: 'gradient',
      gradient: {
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 98],
      }
  },

  };
  chartOptions6:any = {
    series: [
      {
        data: [34, 55, 41, 47, 32, 43, 31],
         color:'rgb(215,110,116)',
      },
    ],
    chart: {
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 3,
        right: 6,
        blur: 3,
        opacity: 0.2,
      },
      type: 'line',
      height: 60,
      width: 80,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
   
    stroke: {
      width: [1.5],
      curve: ['smooth'],
    },
    xaxis: {
      crosshairs: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.9,
        opacityTo: 0.9,
        stops: [0, 98],
      },
    },
  };
  chartOptions7:any = {
    series: [
      {
          data: [31, 53, 32, 47, 41, 55, 44]
      },
  ],
  chart: {
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 3,
          right: 6,
          blur: 3,
          color: ['#FF534D'],
          opacity: 0.2
      },
      type: 'line',
      height: 20,
      width: 100
  },
  tooltip: {
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName:any) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  },
  colors: ["#FF534D"],
  stroke: {
      width: [1],
      curve: ['smooth'],
  },
  xaxis: {
      crosshairs: {
          show: false,
      }
  },
  fill: {
      type: 'gradient',
      gradient: {
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 98],
      }
  },
  };
  chartOptions8:any = {
    series: [
        {
            data: [21, 43, 22, 45, 35, 55, 34]
        },
    ],
    chart: {
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            right: 6,
            blur: 3,
            color: ['#FFBE14'],
            opacity: 0.2
        },
        type: 'line',
        height: 20,
        width: 100
    },
    tooltip: {
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName:any) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    colors: ["#FFBE14"],
    stroke: {
        width: [1],
        curve: ['smooth'],
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
        }
    },
};

  chartOptions9:any = {
    series: [{
        name: "Revenue",
        data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55]
    }],
    chart: {
        height: 170,
        type: "line",
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1],
        show: true,
        curve: ['stepline'],
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    legend: {
        show: false
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    markers: {
        size: 0
    },
    colors: ["#FFBE14"],
    fill: {
        type: 'solid',
    },
};

  chartOptions10:any = {
    series: [{
      name: 'Job Applied',
      type: 'line',
      data: [25, 50, 30, 55, 20, 45, 30]
  }, {
      name: 'Job Viewed',
      type: 'bar',
      data: [35, 25, 40, 30, 45, 35, 60]
  }],
  chart: {
      height: 348,
      type: 'line',
      stacked: false,
      toolbar: {
          show: false
      },
  },
  colors: ["rgba(185, 78, 237, 1)", "rgba(185, 78, 237, 0.1)"],
  grid: {
      borderColor: '#e9edf4',
      padding: {
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
      },
  },
  stroke: {
      width: [2, 0],
      curve: 'smooth',
      dashArray: [0, 4]
  },
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  markers: {
      size: 4,
      hover: {
          size: 5
      }
  },
  fill: {
      opacity: [0.85, 0.25],
      gradient: {
          inverseColors: false,
          shadeIntensity: 1,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
      }
  },
  legend: {
      show: true,
      position: 'top',
      fontFamily: 'Inter, sans-serif',
      markers: {
          width: 10,
          height: 10,
      }
  },
  xaxis: {
      type: 'week',
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
  },
  yaxis: {
      title: {
          style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600
          },
      },
      labels: {
          formatter: function (y:any) {
              return y.toFixed(0) + "";
          }
      }
  },
  tooltip: {
      shared: true,
      intersect: false,
      y: {
          formatter: function (y:any) {
              if (typeof y !== "undefined") {
                  return y.toFixed(0) + " points";
              }
              return y;

          }
      }
  }
  
   


}
chartOptions11:any = {
  series: [
    {
        name: "Tablet",
        data: [[10, 35, 80]]
    },
    {
        name: "Mobile",
        data: [[22, 10, 80]]
    },
    {
        name: "Desktop",
        data: [[25, 25, 150]]
    },
],
chart: {
    height: 350,
    type: "bubble",
    toolbar: {
        show: false
    }
},
grid: {
    borderColor: '#f3f3f3',
    strokeDashArray: 3
},
colors: ["rgb(185, 78, 237)", "rgb(70, 178, 201)", "rgb(237, 78, 131)"],
dataLabels: {
    enabled: false
},
legend: {
    show: true,
    fontSize: '13px',
    labels: {
        colors: '#959595',
    },
    markers: {
        width: 10,
        height: 10,
    },
},
xaxis: {
    min: 0,
    max: 50,
    labels: {
        show: false,
    },
    axisBorder: {
        show: false,
    },
},
yaxis: {
    max: 50,
    labels: {
        show: false,
    },
}
};
public generateData(baseval:any, count:any, yrange:any) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}
chartOptions12:any = {
  series: [{
      data: [17, 22, 37, 47, 39, 28, 14],
      name: 'Revenue',
  }],
  chart: {
      type: 'bar',
      height: 235,
      toolbar: {
          show: false
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 6,
          left: 6,
          blur: 3,
          color: '#000',
          opacity: 0.05
      },
  },
  plotOptions: {
      bar: {
          columnWidth: '35%',
          borderRadius: 4,
          horizontal: false,
          colors: {
              ranges: [{
                  from: 41,
                  to: Infinity,
                  color: "rgb(185, 78, 237)"
              },
              {
                  from: 0,
                  to: 40,
                  color: "rgba(185, 78, 237, 0.2)"
              }]
          },
      }
  },
  dataLabels: {
      enabled: false
  },
  grid: {
      show: false,
      borderColor: 'transparent',
      padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  xaxis: {
      categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      colors: '#fff',
      axisBorder: {
          show: false
      },
      axisTicks: {
          show: false
      },
      labels: {
          rotate: -90,
          style: {
              fontFamily: 'Inter, sans-serif',
          },
      }
  },
  yaxis: {
      colors: '#fff',
      axisBorder: {
          show: false
      },
      axisTicks: {
          show: false
      },
      labels: {
          show: false
      }
  }
};

}
