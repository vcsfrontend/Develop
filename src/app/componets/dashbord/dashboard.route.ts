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
// {
//   path: 'crm',
//   loadComponent: () =>
//     import('./crm/crm.component').then((m) => m.CrmComponent),
// },
{
  path: 'adonai',
  loadComponent: () =>
    import('./adonai/adonai.component').then((m) => m.AdonaiComponent),
},
{
  path: 'crm2',
  loadComponent: () =>
    import('./crm2/crm2.component').then((m) => m.CRM2Component),
},
{
  path: 'dashboard2',
  loadComponent: () =>
    import('./dashboard2/dashboard2.component').then((m) => m.Dashboard2Component),
},
{
  path: 'hrm',
  loadComponent: () =>
    import('./hrm/hrm.component').then((m) => m.HrmComponent),
},
// {
//   path: 'superadmin',
//   loadComponent: () =>
//     import('./superadmin/superadmin.component').then((m) => m.SuperadminComponent),
// },
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
  path: 'designers',
  loadComponent: () =>
    import('./Designers/designers.component').then((m) => m.DesignersComponent),
},
{
  path: 'mytask',
  loadComponent: () =>
    import('./my-tasks/my-tasks.component').then((m) => m.MyTasksComponent),
},
{
  path: 'design',
  loadComponent: () =>
    import('./design/design.component').then((m) => m.DesignComponent),
},
{
  path: 'Project-details',
  loadComponent: () =>
    import('./project-details/project-details.component').then((m) => m.ProjectDetailsComponent),
},
{
  path: 'recce',
  loadComponent: () =>
    import('./recce/recce.component').then((m) => m.RecceComponent),
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
    path: 'orgSettings',
    loadComponent: () =>
    import('./org-settings/org-settings.component').then((m) => m.OrgSettingsComponent),
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
