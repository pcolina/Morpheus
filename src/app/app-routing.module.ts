import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './pages/configPage/configPage/config.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoomsComponent } from './pages/rooms/rooms.component'; 
import { Page404Component } from './page404/page404/page404.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'config', component: ConfigComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**',  component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
