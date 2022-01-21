import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ConfigComponent } from './configPage/configPage/config.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
              { path: 'dashboard', component: DashboardComponent,
              canActivate: [RoleGuard],
              data: {
                role: 'ROLE_ALL'
              }},
              { path: 'rooms', component: RoomsComponent,
              canActivate: [RoleGuard],
              data: {
                role: 'ROLE_USER'
              }},
              { path: 'config', component: ConfigComponent,
              data: {
                role: ['ROLE_ADMIN','ROLE_SUPERADMIN']
              },
              canActivate: [RoleGuard]},
        ]
    },
];
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
