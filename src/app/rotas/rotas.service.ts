import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Veiculo } from './../_models/veiculo';
import { Rota } from './../_models/rota';

@Injectable()
export class RotasService {

  private apiUrl:string = 'http://localhost:8080/';

  rota: Rota;

  private options: RequestOptions;

  constructor(private http: Http) { 
    let token = localStorage.getItem("token");
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', 'Bearer ' + token);
    this.options = new RequestOptions({ headers: header });
   }

  salvarRota(rota: Rota): Observable<String> {
    return this.http.post(this.apiUrl + "rotas/salvar", rota, this.options)
      .map(
        res => { return res.text(); }
      );
  }

  listarRotas(): Observable<Rota[]> {
    return this.http.get(this.apiUrl + 'rotas/listar', this.options)
      .map(res => {
        return res.json();
      });
  }

  listarVeiculos(): Observable<Veiculo[]> {
    return this.http.get(this.apiUrl + 'veiculo/listar', this.options)
      .map(res => {
        return res.json();
      });
  }

  removerRota(rota: Rota): Observable<String> {
    return this.http.post(this.apiUrl + 'rotas/remover', rota, this.options)
      .map(
        res => res.text(),
        err => err
        );
  }
}
