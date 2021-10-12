import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ConfigComponent } from './configPage/configPage/config.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
              { path: 'dashboard', component: DashboardComponent},
              { path: 'rooms', component: RoomsComponent},
              { path: 'config', component: ConfigComponent},
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
