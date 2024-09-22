import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'nested-menu',children:[
    {
      path: 'nested-1',
      loadComponent: () =>
        import('./nested-1/nested-1.component').then((m) => m.Nested1Component),
    },
    {
      path: 'nested-2/nested-2-1',
      loadComponent: () =>
        import('./nested-2/nested-2-1/nested-2-1.component').then((m) => m.Nested21Component),
    },
    {
      path: 'nested-2/nested-2-2',
      loadComponent: () =>
        import('./nested-2/nested-2-2/nested-2-2.component').then((m) => m.Nested22Component),
    },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class nestedmenuRoutingModule {
  static routes = admin;
}
