import { Component, OnInit } from '@angular/core';
import { CriptosService } from '../../service/criptos.service';
import { Cripto } from '../../interface/cripto.interface';

@Component({
  selector: 'app-libre-page',
  templateUrl: './libre-page.component.html',
  styleUrls: ['./libre-page.component.css']
})
export class LibrePageComponent implements OnInit {
  busqueda: string[] = [];
  criptos: Cripto[] = [];

  constructor(private criptosService: CriptosService) { }

  ngOnInit(): void {
  }

  saveHistorial(criptos: Cripto[]) {
    var historial: string[];

    if (localStorage.getItem('historial') !== null) {
      historial = JSON.parse(localStorage.getItem('historial')!);
    } else {
      historial = [];
    }
    console.log(historial);
    criptos.forEach(cripto => {
      if (!historial.includes(cripto.id)) {
        historial.unshift(cripto.id);
        if (historial.length > 5) {
          historial = historial.slice(0,5);
        }
      }
    });
    localStorage.setItem('historial', JSON.stringify(historial));
  }

  buscarCriptos() {
    let busquedaFormateada = this.busqueda.join(",");

    console.log(busquedaFormateada);

    if (busquedaFormateada !== "") {
      this.criptosService.getCryptos(busquedaFormateada.toUpperCase())
      .subscribe({
        next: (resp) => {
          console.log(resp);
          this.criptos = resp;
          this.saveHistorial(resp);
        },
        error: (err) =>{
          console.error(err);
        }
      })
    } else {
      this.criptos = [];
    }

  }
}
