import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebarCollapse') sidebarCollapse: ElementRef | undefined;

  classApplied = true;

  userRole:any = this.usuarioService.getRole();

  constructor(private usuarioService: UsuarioService, private router :Router) { }

  ngOnInit(): void {

  }

  toggleit(){
    console.log("toggle it!");
    this.classApplied = !this.classApplied;

  }

  menuOptionEnable(route:string):boolean{
    let result= false;
    let option:any = this.router.config[0].children?.filter( (item:any) => item.path === route);

    if (option.length>0){
      result = option[0].data.role.includes(this.userRole) ? true :false;
    }

    return result;
  }
}

