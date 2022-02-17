import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  display: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  changeRoute(ruta: string) {
    this.router.navigateByUrl(`/${ruta}`);
    this.display = false;
  }

  get historial() {
    return JSON.parse(localStorage.getItem('historial')! || '[]');
  }
}
