import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebarCollapse') sidebarCollapse: ElementRef | undefined;

  classApplied = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleit(){
    console.log("toggle it!"); 
    this.classApplied = !this.classApplied;  
    
  }
}

