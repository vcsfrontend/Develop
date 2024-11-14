import { Component, TemplateRef, ViewChild, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalConfig,NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule,NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models'
import { CommonModule, DatePipe } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FlatpickrModule, FlatpickrDefaults } from 'angularx-flatpickr';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { ShowCodeContentDirective } from '../../../shared/directives/show-code-content.directive';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { MatButtonModule } from '@angular/material/button'; 
import { SwitherService } from '../../../shared/services/swither.service';
import { AuthService } from '../../../shared/services/auth.service';
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
curve:string

};
@Component({
  selector: 'app-superadmin',
  standalone: true,
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,AngularFireModule,
    AngularFireDatabaseModule, CommonModule,  MatFormFieldModule, MatSelectModule, FlatpickrModule,
    AngularFirestoreModule,ToastrModule, SharedModule, ShowcodeCardComponent, MaterialModuleModule,
    OverlayscrollbarsModule, ShowCodeContentDirective, MatIconModule, NgbTooltipModule,
    NgbPopoverModule,NgApexchartsModule,SharedModule, NgbDropdownModule],
  providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }, 
    FlatpickrDefaults, DatePipe, NgbModalConfig, NgbModal],
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.scss'
})
export class SuperadminComponent {
  displayedColumns: string[] = ['slNo', 'firstName', 'lastName', 'mobile', 'adonai', 'crm', 'action', 'view', 'edit' ];
  displayAdonaiColumns: string[] = ['slNo', 'id', 'email', 'history']
  dataSource = new MatTableDataSource<any>(); 
  adonaiSource = new MatTableDataSource<any>(); 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;  // Access the ng-template
  @ViewChild('template', { static: true }) templateRef!: TemplateRef<any>;
  private modalRef: any;
  userLst:any; userData: any; adonaiHstryLst: any;
  content3: any; content4: any; content5: any; content6: any; content7: any;
  firstNm: any; lastNm: any; companyNm: any; phoneNo: any; dob: any;
  adonaiData: any; crmData: any; 
  adonaiEmail: any; adonaiRoleId: any; isAdonai: any; adonaiActivitySts: any; 
  adonaiSubStartDate: any; adonaiSubEndDate: any; adonaiSubDate: any; adonaiRemarks: any; 
  adonaiAppUid: any; adonaiUsername: any; adonaiCity: any; adonaiUpdatedBy: any; adonaiUpdatedDate: any;
  crmEmail: any; crmRoleId: any; isCrm: any; crmStatus: any; crmSubStartDate: any; 
  crmSubEndDate: any; crmSubDate: any; crmRemarks: any; 
  isAdonaiView = false; isCrmView = false; userNm: any;
  isCrmTrue: any; type: any; users: any; email: any; username: any; country: any; isAdonaiTrue: any;
  
  newUser: string = '';
  chartOptions:any = {
    series: [{
      data: [0, 32, 18, 58]
    }],
    chart: {
      height: 115,
      width: 180,
      type: 'area',
      fontFamily: 'Poppins, Arial, sans-serif',
      foreColor: '#5d6162',
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      enabled: true,
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
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: [1],
    },
    title: {
      text: undefined,
    },
    grid: {
      borderColor: 'transparent',
    },
    xaxis: {
      crosshairs: {
        show: false,
      }
    },
    colors: ["var(--primary-color)"],
  
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 60],
        colorStops: [
          [
            {
              offset: 0,
              color: 'var(--primary02)',
              opacity: 1
            },
            {
              offset: 60,
              color: 'var(--primary02)',
              opacity: 0.1
            }
          ],
        ]
      }
    },
};
chartOptions1:any = {
  series: [{
    data: [0, 32, 18, 58]
  }],
  chart: {
    height: 115,
    width: 180,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
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
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: [1],
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["rgb(231, 76, 60)"],
 
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(231, 76, 60, 0.2)',
            opacity: 1
          },
          {
            offset: 60,
            color: 'rgba(231, 76, 60, 0.2)',
            opacity: 0.1
          }
        ],
      ]
    }
  },
};
chartOptions2:any = {
  series: [{
    data: [0, 32, 18, 58]
  }],
  chart: {
    height: 115,
    width: 180,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
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
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: [1],
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["rgb(69, 214, 91)"],

  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
    }
  },
};
chartOptions3:any = {
  series: [{
    data: [0, 32, 18, 58]
  }],
  chart: {
    height: 115,
    width: 180,
    type: 'area',
    fontFamily: 'Roboto, Arial, sans-serif',
    foreColor: '#5d6162',
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: true,
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
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: [1],
  },
  title: {
    text: undefined,
  },
  grid: {
    borderColor: 'transparent',
  },
  xaxis: {
    crosshairs: {
      show: false,
    }
  },
  colors: ["rgb(52, 152, 219)"],

  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
    }
  },
};
chartOptions4:any = {
  series: [
    {
      name: "Sales",
      data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45],
    },
    {
      name: "Refunds",
      data: [8, 40, 15, 32, 45, 30, 20, 25, 18, 23, 20, 40],
    }
  ],
  chart: {
    type: "area",
    height: 318,
    toolbar: {
      show: false
    }
  },
  colors: [
    "var(--primary-color)",
    "rgb(69, 214, 91)",
  ],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: "var(--primary01)",
            opacity: 50
          },
          {
            offset: 75,
            color: "var(--primary01)",
            opacity: 0.1
          },
          {
            offset: 100,
            color: 'transparent',
            opacity: 0.1
          }
        ],
        [
          {
            offset: 0,
            color: 'rgba(69, 214, 91, 0.1)',
            opacity: 1
          },
          {
            offset: 75,
            color: 'rgba(69, 214, 91, 0.1)',
            opacity: 0.1
          },
          {
            offset: 100,
            color: 'transparent',
            opacity: 1
          }
        ],
      ]
    }
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
  stroke: {
    curve: 'smooth',
    width: [1, 1],
    lineCap: 'round',
  },
  grid: {
    borderColor: "#edeef1",
    strokeDashArray: 2,
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: "rgba(119, 119, 142, 0.05)",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "rgba(119, 119, 142, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      formatter: function (y: number) {
        return y.toFixed(0) + "";
      },
    },
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
};

chartOptions5:any = {
  series: [1654, 1234],
  labels: ["Male", "Female"],
  chart: {
    height: 255,
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
            formatter: function (val: string) {
              return val + "%"
            }
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total',
            fontSize: '22px',
            fontWeight: 300,
            color: '#495057',
          }

        }
      }
    }
  },
  colors: ["var(--primary-color)", "rgba(69, 214, 91, 1)"],

};
chartOptions6:any= {
  series: [
    {
      name: "New Customers",
      data: [12, 20, 16, 21, 17, 22],
    },
    {
      name: "Return Customers",
      data: [20, 12, 14, 12, 19, 15],
    },
  ],
  chart: {
    type: "line",
    height: 125,
    toolbar: {
      show: false
    }
  },
  colors: [
    "var(--primary-color)",
    "rgb(69, 214, 91)"
  ],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: 'smooth',
    width: [1, 1]
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (y:any) {
        return y.toFixed(0) + "";
      },
    },
  },
  xaxis: {
    show: false,
    type: "month",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels: {
      show: false,
    },
  },
};
  constructor(config: NgbModalConfig, private modalService: NgbModal, private viewContainerRef: ViewContainerRef,
    public switchService: SwitherService, private toastr: ToastrService, private dp: DatePipe) {
  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  VerticalScrol(content3:any, element:any) {
		this.modalService.open(content3, { scrollable: true,centered: true });
    console.log('Data:', content3, element);
	}

  VerticallyScrol(content3:any) {
		this.modalService.open(content3, { scrollable: true,centered: true });
	}

  ngOnInit(){
    this.getUsers();
  }

  onRowButtonClick(data: any) {
    console.log('Selected Row Data:', data);
    this.type = (+data.type)== 1 ? 'Individual' : 'Enterprise',
    this.users = data.noOfUsers,
    this.email = data.email,
    this.username = data.username,
    this.country = data.country,
    this.isAdonaiTrue = data.adonai,
    this.isCrmTrue = data.crm,
    this.firstNm = data.firstName,
    this.lastNm = data.lastName,
    this.companyNm = data.companyName,
    this.phoneNo = data.phoneNumber,
    this.dob = data.dob
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.adonaiSource.paginator = this.paginator;
  }  

  getSNo(index: number): number {
    if (this.paginator && this.paginator.pageIndex !== undefined && this.paginator.pageSize !== undefined) {
        return this.paginator.pageIndex * this.paginator.pageSize + index + 1;
    }
    return index + 1; // Default return if paginator is not yet defined
  }
  
  // onClkRB(gI: number, crdtNteDtls: any) {
    // this.userLst.forEach((e:any) => { e.isChk = false}), this.lstGrid[gI].isChk = true;
    // this.crdtNteDtls = crdtNteDtls != '' ? crdtNteDtls: 0;
  // }
  
  getUsers(){
    this.switchService.getAllUsers().subscribe({ next: (res:any) => {
      if(res){
        this.userLst = res
        // this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.data = res;
        } else{
          this.toastr.error(res.message,'', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      }
    })
  }

  getAdonai(data: any, ctrl: string =''){
    // this.userNm = data.username,
    ctrl == 'v' ? (this.isAdonaiView = true) : (this.isAdonaiView = false);
    this.switchService.onAdonaiView(data.email).subscribe({ next: (res:any) => {
      if(res){
        this.adonaiData = res,
        this.adonaiEmail = data.email,
        this.adonaiRoleId = res.subData.roleId,
        // this.isAdonai = res.email; 
        this.adonaiActivitySts = res.subData.activityStatus,
        this.adonaiSubStartDate = this.dp.transform(res.subData.subStartDate, 'yyyy-MM-dd'), 
        this.adonaiSubEndDate = res.subData.subEndDate, 
        this.adonaiSubDate = this.dp.transform(res.subData.subscriptionDate, 'yyyy-MM-dd'), 
        this.adonaiRemarks = res.subData.remarks;
    //     "subData": {
    //     "email": null,
    //     "roleId": 12,
    //     "activityStatus": true,
    //     "subscriptionDate": "2024-11-05T01:24:21.150848386",
    //     "subStartDate": "",
    //     "subEndDate": "",
    //     "remarks": null,
    //     "updatedBy": "",
    //     "updatedDate": ""
    // },
    // "appuid": "DBU0yUs7aN",
    // "username": "Anjana Lokesh",
    // "city": null
        } else{
          this.toastr.error(res.message);
          return;
        }
      }
    })
  }

  getCrm(data:any, ctrl:string = ''){
    // this.userNm = data.username,
    ctrl == 'v' ? (this.isCrmView = true) : (this.isCrmView = false);
    this.switchService.onCrmView(data.email).subscribe({ next: (res:any) => {
      if(res){
        this.crmData = res,
        this.crmEmail = data.email; 
        this.crmRoleId = res.roleId; 
        this.isCrm = true; 
        this.crmStatus = res.crmActivityStatus; 
        this.crmSubStartDate = res.subStartDate; 
        this.crmSubEndDate = res.subEndDate; 
        this.crmSubDate = res.subDate; 
        this.crmRemarks = res.remarks; 
    //     "subData": {
    //     "email": null,
    //     "roleId": 12,
    //     "activityStatus": true,
    //     "subscriptionDate": "2024-11-05T01:24:21.150848386",
    //     "subStartDate": "",
    //     "subEndDate": "",
    //     "remarks": null,
    //     "updatedBy": "",
    //     "updatedDate": ""
    // },
    // "appuid": "DBU0yUs7aN",
    // "username": "Anjana Lokesh",
    // "city": null
        } else{
          this.toastr.error(res.message);
          return;
        }
      }
    })
  }

  updateAdonai(){
    // this.submitted = true; 
    let payload = {
        "email": this.adonaiEmail,
        "roleId": this.adonaiRoleId,
        "activityStatus": this.adonaiActivitySts,
        "subscriptionDate": this.dp.transform(this.adonaiSubDate, 'dd-MM-yyyy'),
        "subStartDate": this.dp.transform(this.adonaiSubStartDate, 'dd-MM-yyyy'),
        "subEndDate": this.dp.transform(this.adonaiSubEndDate, 'dd-MM-yyyy'),
        "remarks": this.adonaiRemarks,
        "updatedBy": localStorage.getItem('username')
    };
    // payload.type = +payload.type, 
    // payload.dob = this.dp.transform(payload.dob, 'dd-MM-yyyy');
    // if (this.signupFrm.invalid) {
    //   this.toastr.error('Please fill mandatory fields');
    //   this.btnDisable = false;
    //     return;
    // }
    // else{
    console.log('pl-',payload);
      this.switchService.onAdonaiUpdate(payload).subscribe({ next: (res:any) => {
        if(res.status == true){
          this.toastr.success(res.message)
          } else {
            // this.btnDisable = false;
            this.toastr.error(res.message);
          }
        }
      })
    // }
  }

  getHistory(data:any){
    this.switchService.adonaiHstry(data.email).subscribe({ next: (res:any) => {
      if(res){
        this.adonaiHstryLst = res,
        this.adonaiSource.data = res;
        console.log(res);
      } else{
        this.toastr.error(res.message,'', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
          });
        }
      }
    })
  }

  openLg(content10:any) {
		this.modalService.open(content10, { size: 'lg' },);
	}

  openMdl(template: TemplateRef<any>) {
    this.viewContainerRef.createEmbeddedView(template);
  }

  closeMdl() {
    this.viewContainerRef.clear();
  }  

  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }
  
  
}