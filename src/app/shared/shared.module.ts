import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component'; 
 
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,  
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
