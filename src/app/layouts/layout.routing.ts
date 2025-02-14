import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { IconsComponent } from '../pages/icons/icons.component';
import { MapsComponent } from '../pages/maps/maps.component';
import { TablesComponent } from '../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'submitted',         component: TablesComponent },
    { path: 'captured',          component: IconsComponent },
    { path: 'create',           component: MapsComponent }
];
