import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'advanced-ui',children:[
  // {
  //   path: 'accordions-collapse',
  //   loadComponent: () =>
  //     import('./accordions-collapse/accordions-collapse.component').then((m) => m.AccordionsCollapseComponent),
  // },
  {
    path: 'accordions-collapse',
    loadComponent: () =>
      import('./accordions-collapse/accordions-collapse.component').then((m) => m.AccordionsCollapseComponent),
  },
  {
    path: 'carousel',
    loadComponent: () =>
      import('./carousel/carousel.component').then((m) => m.CarouselComponent),
  },
  {
    path: 'draggable-cards',
    loadComponent: () =>
      import('./draggble-cards/draggble-cards.component').then(
        (m) => m.DraggbleCardsComponent
      ),
  },
  {
    path: 'modals-closes',
    loadComponent: () =>
      import('./modals-closes/modals-closes.component').then(
        (m) => m.ModelsClosesComponent
      ),
  },
  {
    path: 'navbar',
    loadComponent: () =>
      import('./navbar/navbar.component').then((m) => m.NavbarComponent),
  },
  {
    path: 'offcanvas',
    loadComponent: () =>
      import('./offcanvas/offcanvas.component').then(
        (m) => m.OffcanvasComponent
      ),
  },
  {
    path: 'placeholders',
    loadComponent: () =>
      import('./placeholders/placeholders.component').then(
        (m) => m.PlaceholdersComponent
      ),
  },

  {
    path: 'ratings',
    loadComponent: () =>
      import('./ratings/ratings.component').then((m) => m.RatingsComponent),
  },
  {
    path: 'scrollspy',
    loadComponent: () =>
      import('./scrollpy/scrollpy.component').then((m) => m.ScrollpyComponent),
  },
  {
    path: 'swiper-js',
    loadComponent: () =>
      import('./swiper-js/swiper-js.component').then(
        (m) => m.SwiperJsComponent
      ),
  },
 ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class advanceduiRoutingModule {
  static routes = admin;
}