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
import { CoolTheme, data } from '../../../componets/charts/echart-charts/echarts';
import { MatCommonModule } from '@angular/material/core';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import { ThemeOption } from 'ngx-echarts';
import * as echarts from 'echarts';
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
    NgbPopoverModule,NgApexchartsModule, NgbDropdownModule,MatCommonModule, NgxEchartsModule],
  providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }, 
    FlatpickrDefaults, DatePipe, NgbModalConfig, NgbModal,
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: echarts }),
    },],
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.scss'
})
export class SuperadminComponent {
  displayedColumns: string[] = ['slNo', 'firstName', 'lastName', 'mobile', 'adonai', 'crm', 'action', 'view', 'edit' ];
  displayAdonaiColumns: string[] = ['slNo', 'id', 'email', 'history'];
  displayCrmColumns: string[] = ['slNo', 'id', 'email', 'history'];
  dataSource = new MatTableDataSource<any>(); 
  adonaiSource = new MatTableDataSource<any>(); 
  crmSource = new MatTableDataSource<any>();
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginator1') paginator1!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;  // Access the ng-template
  @ViewChild('template', { static: true }) templateRef!: TemplateRef<any>;
  private modalRef: any;
  content3: any; content4: any; content5: any; content6: any; content7: any;
  userLst:any; userData: any; adonaiHstryLst: any; crmHstryLst: any;
  firstNm: any; lastNm: any; companyNm: any; phoneNo: any; dob: any;
  adonaiData: any; crmData: any; 
  adonaiEmail: any; adonaiRoleId: any; isAdonai: any; adonaiActivitySts:any; 
  adonaiSubStartDate: any; adonaiSubEndDate: any; adonaiSubDate: any; adonaiRemarks: any; 
  adonaiAppUid: any; adonaiUsername: any; adonaiCity: any; adonaiUpdatedBy: any; adonaiUpdatedDate: any;
  crmEmail: any; crmRoleId: any; isCrm: any; crmStatus: any; crmSubStartDate: any; crmSubEndDate: any; 
  crmSubDate: any; crmRemarks: any; crmUsername: any; crmCity:any; crmUpdatedBy: any;
  isAdonaiView = false; isCrmView = false; userNm: any;
  isCrmTrue: any; type: any; users: any; email: any; username: any; country: any; isAdonaiTrue: any;
  dbData: any = {}; isSts:boolean =true;

  totalUsers = 896; // Replace this with the correct total value if it's dynamic
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
  series: [44, 55, 13, 43],
  chart: {
    heght:250,
    width:250,
      type: "pie",
  },
  colors: ["var(--primary08)", "rgba(69, 214, 91, 0.8)", "rgba(243, 156, 18, 0.8)", "rgba(231, 76, 60, 0.8)"],
  labels: ["Mobile", "Desktop", "Laptop", "Tablet"],
  legend: {
      show: false,
  },
  stroke: {
      width: 0
  },
  dataLabels: {
      enabled: true,
      dropShadow: {
          enabled: false,
      },
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
  colors: ["rgb(231, 76, 60)"],

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
    this.getUsers(); this.getInfo();
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
    this.adonaiSource.paginator = this.paginator1;
    this.crmSource.paginator = this.paginator2;
  }  

  getSnos(index: number): number {
    return this.paginator ? index + 1 + this.paginator.pageIndex * this.paginator.pageSize : index + 1;
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
        // this.isSts = res.subData.activityStatus,
        this.adonaiSubStartDate = this.convertDate(res.subData.subStartDate), 
        this.adonaiSubEndDate = this.convertDate(res.subData.subEndDate)
        this.adonaiSubDate = this.dp.transform(res.subData.subscriptionDate, 'yyyy-MM-dd'), 
        this.adonaiRemarks = res.subData.remarks;
        this.adonaiAppUid = res.appuid;
        this.adonaiUsername = res.username;
        this.adonaiCity = res.city;
        } else{
          this.toastr.error(res.message);
          return;
        }
      }
    })
  }

  convertDate(date:any) {
    const [month, day, year] = date.split('-');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate; // Output: 2024-12-15
  }

  getCrm(data:any, ctrl:string = ''){
    // this.userNm = data.username,
    ctrl == 'v' ? (this.isCrmView = true) : (this.isCrmView = false);
    this.switchService.onCrmView(data.email).subscribe({ next: (res:any) => {
      if(res){
        this.crmData = res,
        this.crmEmail = data.email; 
        this.crmRoleId = res.crmDataResponse.roleId; 
        this.crmStatus = res.crmDataResponse.crmActivityStatus; 
        this.crmSubStartDate = res.crmDataResponse.subStartDate; 
        this.crmSubEndDate = res.crmDataResponse.subEndDate; 
        this.crmSubDate = res.crmDataResponse.subDate; 
        this.crmRemarks = res.crmDataResponse.remarks; 
        this.crmUsername = res.username; 
        this.crmCity = res.city; 
    // "crmDataResponse": {
    //     "roleId": 0,
    //     "crmActivityStatus": true,
    //     "subDate": "2024-10-16T13:58:58.969282899",
    //     "subStartDate": "",
    //     "subEndDate": "",
    //     "updatedBy": "",
    //     "updatedDate": "",
    //     "remarks": null
    // },
    // "email": "masteradonai@gmail.com",
    // "username": "adonai-master",
    // "city": null,
    // "companyname": "individual company",
    // "noOfUsers": 1
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

  updateCrm(){
    // this.submitted = true; 
    let payload = {
      "email": this.crmEmail,
      "roleId": this.crmRoleId,
      "crmActivityStatus": this.crmStatus,
      "subDate": this.dp.transform(this.crmSubDate, 'dd-MM-yyyy'),
      "subStartDate": this.dp.transform(this.crmSubStartDate, 'dd-MM-yyyy'),
      "subEndDate": this.dp.transform(this.crmSubEndDate, 'dd-MM-yyyy'),
      "remarks": this.crmRemarks,
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
    console.log('crmPl-',payload);
      this.switchService.onCrmUpdate(payload).subscribe({ next: (res:any) => {
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

  getAdonaiHistory(data:any){
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

  getCrmHistory(data:any){
    this.switchService.crmHstry(data.email).subscribe({ next: (res:any) => {
      if(res){
        this.crmHstryLst = res,
        this.crmSource.data = res;
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
  
  getInfo() {
    // superAdminDbData
    this.switchService.superAdminDbData().subscribe({ next: (res:any) => {
      if(res){
        this.dbData = res;
      } else{
        this.toastr.error(res.message,'', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
          });
        }
      }
    })
    // this.dbData = {
    //   "totalUsers": 55,
    //   "totalUserAnalytics": 16.363636363636363,
    //   "totalNewUsers": 10,
    //   "totalNewAnalytics": 111.11111111111111,
    //   "revenueGenerated": 0,
    //   "revenueAnalytics": 0,
    //   "totalRenevalUsers": 0,
    //   "renevalUsersAnalytics": 0,
    //   "crmTotalUsers": 33,
    //   "crmTotalUserAnalytics": 27.272727272727273,
    //   "crmTotalNewUsers": 8,
    //   "crmTotalNewAnalytics": 88.88888888888889,
    //   "crmRevenueGenerated": 0,
    //   "crmRevenueAnalytics": 0,
    //   "crmTotalRenevalUsers": 0,
    //   "crmRenevalUserAnalytics": 0,
    //   "adonaiTotalUsers": 30,
    //   "adonaiTotalUserAnalytics": 30,
    //   "adonaiTotalNewUsers": 8,
    //   "adonaiTotalNewAnalytics": 30,
    //   "adonaiRevenueGenerated": 0,
    //   "adonaiRevenueAnalytics": 0,
    //   "adonaiTotalRenevalUsers": 0,
    //   "adonaiRenevalUserAnalytics": 0,
    //   "individualCount": 44,
    //   "enterpriseCount": 11,
    //   "adonaiData": [
    //     { "count": 12,"city": "Bangalore"},
    //     { "city": "Chennai", "count": 11 },
    //     { "city": "Delhi", "count": 4 },
    //     { "city": "Hyderabad", "count": 3 }
    //   ],
    //   "crmData": [
    //     { "count": 15, "city": "Bangalore" },
    //     { "city": "Chennai", "count": 11 },
    //     { "city": "Delhi", "count": 4 },
    //     { "city": "Hyderabad", "count": 3 }
    //   ]
    // }
  }

  options27:any = {
    title: {
      text: 'Adonai Vs CRM',
      // subtext: 'Fake Data'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Adonai', 'CRM']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        // prettier-ignore
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Adonai',
        type: 'bar',
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
        ],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      {
        name: 'CRM',
        type: 'bar',
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ],
        markPoint: {
          data: [
            { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
            { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }
    ]
  };

  options25: EChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}',
        },
        data: [
          {
            value: 50,
            name: 'SCORE',
          },
        ],
      },
    ],
    color: ['#845adf'],
  };
  
}