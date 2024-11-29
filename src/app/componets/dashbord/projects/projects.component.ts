import { Component, OnInit, ViewChild } from '@angular/core';
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
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests
import { FilePondOptions } from 'filepond';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbDropdownModule,NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { SwitherService } from '../../../shared/services/swither.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { ShowCodeContentDirective } from '../../../shared/directives/show-code-content.directive';
import { BaseComponent } from '../../../shared/base/base.component';
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
  fill: ApexFill;
  grid: any; //ApexGrid;
  colors: any;
  toolbar: any;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  // imports: [SharedModule, NgApexchartsModule, CommonModule, FormsModule,
  //   NgbDropdownModule,MatDatepickerModule,MatInputModule,MatNativeDateModule,ReactiveFormsModule],
  //   providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }, DatePipe],
    imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule, AngularFireModule,
      AngularFireDatabaseModule, CommonModule,  MatFormFieldModule, MatSelectModule, FlatpickrModule,
      AngularFirestoreModule, ToastrModule, SharedModule, ShowcodeCardComponent, MaterialModuleModule,
      OverlayscrollbarsModule, ShowCodeContentDirective, MatIconModule, NgApexchartsModule,
      NgbDropdownModule,MatDatepickerModule,MatInputModule,MatNativeDateModule,],
    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }, FlatpickrDefaults, DatePipe],
    
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = ['slNo', 'projectId', 'projectName', 'clientName', 'businessCategory',
    'projectAddress', 'state', 'city', 'projectState', 'projectEstimation',
    'projectArea', 'projectStartDate', 'projectEndDate', 'action', 'designId', 'companyName'
  ];
  pjData : any = {}; isSts:boolean = true; submitted: boolean = false; userData: any;
  
//   {
//     "id": 1,
//     "projectId": "VCS001",
//     "projectName": "sk interiors",
//     "clientName": "sk inter",
//     "businessCategory": "mobile",
//     "projectAddress": "d no 19 ghantasala",
//     "state": "ap",
//     "city": "vijayawada",
//     "projectState": "design",
//     "projectEstimation": "12356",
//     "projectArea": "1256",
//     "projectStartDate": "2024-11-03T18:30:00.000Z",
//     "projectEndDate": "2024-11-11T18:30:00.000Z",
//     "action": "hello",
//     "designId": null,
//     "companyName": "sk interiors"
// }
  dataSource = new MatTableDataSource<any>(); 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  modal: any;
  projectLst: any; userDetails:any;
  // open(content1:any) {
	// 	this.modalService.open(content1,{ centered: true });
	// }
  openLg(content10:any) {
		this.modalService.open(content10, { size: 'lg' },);
	}
  open(content11:any) {
		this.modalService.open(content11, { size: 'lg' },);
	}
  content12:any;
  
  createProjectForm!: FormGroup;
  pondOptions: FilePondOptions;

  constructor(private fb: FormBuilder, private http: HttpClient, private modalService: NgbModal,
    private toastr: ToastrService, public switchService: SwitherService, private dp: DatePipe
  ) { //localStorage.getItem('userDetails.companyName')
    // Initialize FilePond options if needed
    super();
    this.userDetails = localStorage.getItem('userDetails');
    this.pondOptions = {
      allowMultiple: true,
      // other FilePond options here
    };
  }
 
  ngOnInit(): void {
    this.getLst(); this.getdesignData();
    // console.log(this.pjData);
    this.onMinDate(); this.onTodayDt();
    // Initialize the form with the necessary controls and validators
    this.createProjectForm = this.fb.group({
      projectName: ['', Validators.required],
      clientName: ['', Validators.required],
      businessCategory: ['', Validators.required],
      projectAddress: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      projectState: ['', Validators.required],
      projectEstimation: ['', [Validators.required, Validators.min(0)]], // Assuming estimation should be a positive number
      projectArea: ['', [Validators.required, Validators.min(0)]], // Assuming area should be a positive number
      projectStartDate: ['', Validators.required],
      projectEndDate: ['', Validators.required],
      action: ['', Validators.required],
      companyName: [JSON.parse(this.userDetails)?.companyName],
      attachments: [null] // Adjust based on your attachment handling
    });
  }

  get f() {
    return this.createProjectForm.controls;
  }

  onClkDesign(){
    this.userData = localStorage.getItem('userDetails');
    this.switchService.onAdonai(JSON.parse(this.userData).email).subscribe({
      next: (res:any) => {
        if(res.status == false){
          alert(res.message)
          return;
        } else {
          window.open(res.newDesign, '_blank');
          this.toastr.success(res.message);
        }
      }
    })
  }
  

  onSubmit(): void {
    this.submitted = true;
    if (this.createProjectForm.invalid) {
      this.toastr.error('Please fill mandatory fields');
      // this.btnDisable = false;
      return;
    }
    else if (this.createProjectForm.valid) {
      const projectData = this.createProjectForm.value;
      projectData.companyName = JSON.parse(this.userDetails)?.companyName,
      // projectData.projectStartDate = this.dp.transform(projectData.projectStartDate, 'dd-MM-yyyy'),
      // projectData.projectEndDate = this.dp.transform(projectData.projectEndDate, 'dd-MM-yyyy'),
      this.switchService.saveProject(projectData).subscribe({
        next: (response) => {
          console.log('Project created successfully', response);
          this.modalService.dismissAll(),
          this.getLst();
        },
        error: (error) => {
          console.error('Error creating project', error);
        },
        complete: () => {
          console.log('Project creation process completed.');
          this.resetForm(); // Optionally reset the form after submission
        },
      });
    } else {
      // Mark all controls as touched to show validation errors
      this.createProjectForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }

  // Optional: You can create a method to reset the form
  resetForm(): void {
    this.createProjectForm.reset();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }  

  getSNo(index: number): number {
    if (this.paginator && this.paginator.pageIndex !== undefined && this.paginator.pageSize !== undefined) {
        return this.paginator.pageIndex * this.paginator.pageSize + index + 1;
    }
    return index + 1; // Default return if paginator is not yet defined
  }

  getLst(){
    // console.log(JSON.parse(this.userDetails)?.companyName);
    let cmpnyNm = JSON.parse(this.userDetails)?.companyName
    this.switchService.projectLst(cmpnyNm).subscribe({ next: (res:any) => {
      if(res){
        this.projectLst = res
        this.dataSource.data = res;
        } else {
          this.toastr.error(res.message);
        }
      }
    })
  }

  getdesignData(){
    this.switchService.designersDbData(JSON.parse(this.userDetails)?.companyName).subscribe({ next: (res:any) =>{
    if(res){    
      this.pjData = res;
    } else {
      this.toastr.error(res.message,'', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
        });
      }
    },
    error: (error) => {
      this.toastr.error(error.statusText);
    },
    })
  
  }

  chartOptions: any = {
    series: [
      {
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102],
      },
    ],
    chart: {
      height: 70,
      type: 'area',
      fontFamily: 'Poppins, sans-serif',
      foreColor: '#5d6162',
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName: any) {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: '1',
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
      },
    },
    colors: ['var(--primary-color)'],
    stroke1: {
      width: [1],
    },
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
              opacity: 1,
            },
            {
              offset: 60,
              color: 'var(--primary02)',
              opacity: 0.1,
            },
          ],
        ],
      },
    },
  };
  chartOptions1: any = {
    series: [
      {
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102],
      },
    ],
    chart: {
      height: 70,
      type: 'area',
      fontFamily: 'Poppins, sans-serif',
      foreColor: '#5d6162',
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName: any) {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: '1',
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
      },
    },
    colors: ['rgb(52, 152, 219)'],
    stroke1: {
      width: [1],
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 60],
      },
    },
  };
  chartOptions2: any = {
    series: [
      {
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102],
      },
    ],
    chart: {
      height: 70,
      type: 'area',
      fontFamily: 'Poppins, sans-serif',
      foreColor: '#5d6162',
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName: any) {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: '1',
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
      },
    },
    colors: ['rgb(46, 204, 113)'],
    stroke1: {
      width: [1],
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 60],
      },
    },
  };
  chartOptions3: any = {
    series: [
      {
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102],
      },
    ],
    chart: {
      height: 70,
      type: 'area',
      fontFamily: 'Poppins, sans-serif',
      foreColor: '#5d6162',
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName: any) {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: '1',
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
      },
    },
    colors: ['rgb(231, 76, 60)'],
    stroke1: {
      width: [1],
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 60],
      },
    },
  };
  chartOptions4: any = {
    series: [
      {
        name: 'Income',
        data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
      },
      {
        name: 'Expenses',
        data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: 'bar',
      fontFamily: "'Poppins', sans-serif",
      height: 380,
      stacked: true,
    },
    colors: ['var(--primary-color)', 'rgb(69, 214, 91)'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '22%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: ['6', '6'],
      curve: 'smooth',
    },
    legend: {
      show: true,
      position: 'top',
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
        offsetY: 0,
      },
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
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
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      tickAmount: 4,
    },
  };
  chartOptions5: any = {
    chart: {
      type: 'line',
      height: 45,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: '#fff',
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'Value',
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    yaxis1: {
      axisBorder: {
        show: false,
      },
    },
    colors: ['rgba(243, 156, 18, 0.2)'],
    tooltip: {
      enabled: true,
    },
  };
  chartOptions6: any = {
    chart: {
      height: 150,
      width: 150,
      type: 'radialBar',
    },

    series: [48],
    colors: ['rgb(69, 214, 91)'],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: '#4b9bfa',
            fontSize: '10px',
            show: false,
          },
          value: {
            offsetY: 5,
            color: '#4b9bfa',
            fontSize: '12px',
            show: true,
            fontWeight: 800,
          },
        },
      },
    },
    stroke: {
      lineCap: "round"
    },
    labels: ['Followers'],
  };
  chartOptions7:any= {
    series: [
      {
        name: "Recieved Income",
        type: "column",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6,5.6,6.6,7.8,9.7]
      },
      {
        name: "Pending Income",
        type: "column",
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5,9.5,10,8.6,7.6]
      },
      {
        name: "Revenue",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58,65,43,55,60]
      }
    ],
    colors:['#b94eed','#44c2e9','#f6c364'],
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [1, 1, 4]
    },
    title: {
      text: "XYZ - Stock Analysis (2009 - 2016)",
      align: "left",
      offsetX: 110
    },
    xaxis: {
      // categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
      categories: ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec']
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#9673e4"
        },
        labels: {
          style: {
            color: "#9673e4"
          }
        },
        title: {
          text: "Income (thousand crores)",
          style: {
            color: "#9673e4"
          }
        },
      
      },
      {
        
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#44c2e9"
        },
        labels: {
          style: {
            color: "#44c2e9"
          }
        },
        title: {
          text: "Operating Cashflow (thousand crores)",
          style: {
            color: "#44c2e9"
          }
        }
      },
      {
       
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FEB019"
        },
        labels: {
          style: {
            color: "#FEB019"
          }
        },
        title: {
          text: "Revenue (thousand crores)",
          style: {
            color: "#FEB019"
          }
        }
      }
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  };

  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public generateData(count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  fileName: string | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = null; // Reset if no file selected
    }
  }

  
}

