import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardRoutingModule } from '../../componets/dashbord/dashboard.route';
import {
  admin,
  advanceduiRoutingModule,
} from '../../componets/advanced-ui/advanced-ui.route';
import { pagesRoutingModule } from '../../componets/pages/pages.route';

import { appsRoutingModule } from '../../componets/apps/apps.route';
import { nestedmenuRoutingModule } from '../../componets/nested-menu/nested-menu.route';
import { uielementsRoutingModule } from '../../componets/ui-elements/ui-elements.route';
import { utilitiesRoutingModule } from '../../componets/utilities/utilities.route';
import { formsRoutingModule } from '../../componets/forms/forms.route';
import { widgetsRoutingModule } from '../../componets/widgets/widgets.route';
import { tablesRoutingModule } from '../../componets/tables/tables.route';
import { chartsRoutingModule } from '../../componets/charts/charts.route';
import { mapRoutingModule } from '../../componets/map/map.route';
import { iconsRoutingModule } from '../../componets/icons/icons.route';

export const content: Routes = [
  {
    path: '',
    children: [
      ...dashboardRoutingModule.routes,
      ...pagesRoutingModule.routes,
      ...appsRoutingModule.routes,
      ...nestedmenuRoutingModule.routes,
      ...uielementsRoutingModule.routes,
      ...utilitiesRoutingModule.routes,
      ...formsRoutingModule.routes,
      ...advanceduiRoutingModule.routes,
      ...widgetsRoutingModule.routes,
      ...tablesRoutingModule.routes,
      ...chartsRoutingModule.routes,
      ...mapRoutingModule.routes,
      ...iconsRoutingModule.routes,
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(admin)],
  exports: [RouterModule],
})
export class SaredRoutingModule {}
