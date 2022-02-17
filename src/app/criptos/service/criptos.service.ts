import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cripto } from '../interface/cripto.interface';

@Injectable({
  providedIn: 'root'
})
export class CriptosService {

  urlBase: string = "https://cors-anywhere.herokuapp.com/https://api.nomics.com/v1";
  apikey: string = "73f7a9c765884b6142293b489f8fe6552b55b20d";

  constructor(private http: HttpClient) { }

  getCurrencyRanking() {
    const url = `${this.urlBase}/currencies/ticker?key=${this.apikey}&sort=rank&per-page=10`;
    return this.http.get<Cripto[]>(url);
  }

  getCryptos(criptosStr: string) {
    const url = `${this.urlBase}/currencies/ticker?key=${this.apikey}&sort=rank&ids=${criptosStr}`;
    return this.http.get<Cripto[]>(url);
  }

}
