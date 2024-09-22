import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'widgets',
    loadComponent: () =>
      import('./widgets.component').then((m) => m.WidgetsComponent),
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class widgetsRoutingModule {
  static routes = admin;
}