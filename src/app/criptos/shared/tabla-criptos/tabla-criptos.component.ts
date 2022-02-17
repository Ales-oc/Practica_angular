import { Component, Input, OnInit } from '@angular/core';
import { Cripto } from '../../interface/cripto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-criptos',
  templateUrl: './tabla-criptos.component.html',
  styleUrls: ['./tabla-criptos.component.css']
})
export class TablaCriptosComponent implements OnInit {

@Input() criptos: Cripto[] = [];

  constructor(private router : Router) { }

  messageMapping: {
    [k: string]: string
  } = {
    '=1': 'Una criptomoneda encontrada.', 'other': '# criptomonedas encontradas.'
  };

  ngOnInit(): void {
  }

  reload() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
