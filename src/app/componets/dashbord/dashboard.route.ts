import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboard',children:[
   {
  path: 'sales',
  loadComponent: () =>
    import('./sales/sales.component').then((m) => m.SalesComponent),
},
{
  path: 'analytics',
  loadComponent: () =>
    import('./analytics/analytics.component').then(
      (m) => m.AnalyticsComponent
    ),
},
{
  path: 'ecommerce',
  loadComponent: () =>
    import('./ecommerce/ecommerce.component').then(
      (m) => m.EcommerceComponent
    ),
},
{
  path: 'crm',
  loadComponent: () =>
    import('./crm/crm.component').then((m) => m.CrmComponent),
},
{
  path: 'adonai',
  loadComponent: () =>
    import('./adonai/adonai.component').then((m) => m.AdonaiComponent),
},
{
  path: 'hrm',
  loadComponent: () =>
    import('./hrm/hrm.component').then((m) => m.HrmComponent),
},
{
  path: 'nft',
  loadComponent: () =>
    import('./nft/nft.component').then((m) => m.NftComponent),
},
{
  path: 'crypto',
  loadComponent: () =>
    import('./crypto/crypto.component').then((m) => m.CryptoComponent),
},
{
  path: 'jobs',
  loadComponent: () =>
    import('./jobs/jobs.component').then((m) => m.JobsComponent),
},
{
  path: 'projects',
  loadComponent: () =>
    import('./projects/projects.component').then((m) => m.ProjectsComponent),
},
{
  path: 'Project-Details',
  loadComponent: () =>
    import('./project-details/project-details.component').then((m) => m.ProjectDetailsComponent),
},
{
  path: 'mytask',
  loadComponent: () =>
    import('./my-tasks/my-tasks.component').then((m) => m.MyTasksComponent),
},
{
  path: 'Order-Details',
  loadComponent: () =>
    import('./order-details/order-details.component').then((m) => m.OrderDetailsComponent),
},
{
  path: 'quotation',
  loadComponent: () =>
    import('./quotation/quotation.component').then((m) => m.QuotationComponent),
},
{
  path: 'courses',
  loadComponent: () =>
    import('./courses/courses.component').then((m) => m.CoursesComponent),
},
{
  path: 'stocks',
  loadComponent: () =>
    import('./stocks/stocks.component').then((m) => m.StocksComponent),
},
{
  path: 'settings',
    loadComponent: () =>
      import('./settings/settings.component').then((m) => m.SettingsComponent),
  },
{
  path: 'personal',
  loadComponent: () =>
    import('./personal/personal.component').then((m) => m.PersonalComponent),
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}
