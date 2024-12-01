import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TableModule } from "ngx-easy-table";
import { App_Route} from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import{MatTableModule} from '@angular/material/table';
import{MatTableDataSource} from '@angular/material/table';
import { NgApexchartsModule } from "ng-apexcharts";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgxSliderModule } from 'ngx-slider-v2';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorModule } from 'smart-webcomponents-angular/editor';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FilePondModule } from 'ngx-filepond';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppStateService } from './shared/services/app-state.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(App_Route), AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule, provideAnimations(),importProvidersFrom(AppStateService,ColorPickerModule,
      AngularFireModule.initializeApp(environment.firebase), 
      ToastrModule.forRoot({ timeOut: 3000, positionClass: 'toast-top-right' }),
      FullCalendarModule,FilePondModule,NgbNavModule,EditorModule,
      NgbCollapseModule,NgxCleaveDirectiveModule,TableModule,NgxSliderModule,
      FlatpickrModule,MatTableModule,MatTableDataSource,NgApexchartsModule,
      LeafletModule,ColorPickerModule,HttpClientModule,HttpClientJsonpModule,
      // provideRouter(routes),BsDatepickerModule.forRoot()
    )],
   
  }