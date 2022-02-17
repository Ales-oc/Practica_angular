import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cripto } from '../../interface/cripto.interface';
import { CriptosService } from '../../service/criptos.service';


@Component({
  selector: 'app-criptos-page',
  templateUrl: './criptos-page.component.html',
  styleUrls: ['./criptos-page.component.css']
})
export class CriptosPageComponent implements OnInit {
  criptos: Cripto[] = [];

  constructor(private criptoService: CriptosService, private router: Router) {}

  ngOnInit(): void {
    this.criptoService.getCurrencyRanking()
    .subscribe({
      next: (resp) => {
        console.log(resp);
        this.criptos = resp;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
