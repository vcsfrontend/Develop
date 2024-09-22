import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'ui-elements',children:[
    {
      path: 'alerts',
      loadComponent: () =>
        import('./alerts/alerts.component').then((m) => m.AlertsComponent),
    },
    {
      path: 'badge',
      loadComponent: () =>
        import('./badge/badge.component').then((m) => m.BadgeComponent),
    },
    {
      path: 'breadcrumb',
      loadComponent: () =>
        import('./breadcrumb/breadcrumb.component').then((m) => m.BreadcrumbComponent),
    },
    {
      path: 'buttons',
      loadComponent: () =>
        import('./buttons/buttons.component').then((m) => m.ButtonsComponent),
    },
    {
      path: 'button-group',
      loadComponent: () =>
        import('./button-group/button-group.component').then((m) => m.ButtonGroupComponent),
    },
    {
      path: 'cards',
      loadComponent: () =>
        import('./cards/cards.component').then((m) => m.CardsComponent),
    },
    {
      path: 'dropdowns',
      loadComponent: () =>
        import('./dropdowns/dropdowns.component').then((m) => m.DropdownsComponent),
    },
    {
      path: 'images-figures',
      loadComponent: () =>
        import('./images-figures/images-figures.component').then((m) => m.ImagesFiguresComponent),
    },
    {
      path: 'list-group',
      loadComponent: () =>
        import('./list-group/list-group.component').then((m) => m.ListGroupComponent),
    },
    {
      path: 'navs-tabs',
      loadComponent: () =>
        import('./navs-tabs/navs-tabs.component').then((m) => m.NavsTabsComponent),
    },
    {
      path: 'object-fit',
      loadComponent: () =>
        import('./object-fit/object-fit.component').then((m) => m.ObjectFitComponent),
    },
    {
      path: 'pagination',
      loadComponent: () =>
        import('./pagination/pagination.component').then((m) => m.PaginationComponent),
    },
    {
      path: 'popovers',
      loadComponent: () =>
        import('./popovers/popovers.component').then((m) => m.PopoversComponent),
    },
    {
      path: 'progress',
      loadComponent: () =>
        import('./progress/progress.component').then((m) => m.ProgressComponent),
    },
    {
      path: 'spinners',
      loadComponent: () =>
        import('./spinners/spinners.component').then((m) => m.SpinnersComponent),
    },
    {
      path: 'toasts',
      loadComponent: () =>
        import('./toasts/toasts.component').then((m) => m.ToastsComponent),
    },
    {
      path: 'tooltips',
      loadComponent: () =>
        import('./tooltips/tooltips.component').then((m) => m.TooltipsComponent),
    },
    {
      path: 'typography',
      loadComponent: () =>
        import('./typograpy/typograpy.component').then((m) => m.TypograpyComponent),
    },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class uielementsRoutingModule {
  static routes = admin;
}
