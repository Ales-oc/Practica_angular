import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CriptosService } from '../../service/criptos.service';
import { Cripto } from '../../interface/cripto.interface';

@Component({
  selector: 'app-cripto-details',
  templateUrl: './cripto-details.component.html',
  styleUrls: ['./cripto-details.component.css']
})
export class CriptoDetailsComponent implements OnInit {

  private idCripto: string = "";
  porcentajePrecio: number = 0;
  cripto!: Cripto

  constructor(private router: Router, private criptosService: CriptosService) {
    this.idCripto = router.url.split('/')[2];
  }

  ngOnInit(): void {
    this.criptosService.getCryptos(this.idCripto)
    .subscribe({
      next: (resp)=>{
        console.log(resp);
        this.cripto = resp[0];
        this.porcentajePrecio = (Number.parseFloat(this.cripto.price) * 100)/Number.parseFloat(this.cripto.high);
      },
      error: (err) => {
        console.error(err);
      }
    })


  }

}
