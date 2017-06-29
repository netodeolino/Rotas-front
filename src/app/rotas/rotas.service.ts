import { Rota } from './../_models/rota';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RotasService {

private apiUrl:string = 'http://localhost:8080/';

  private options: RequestOptions;

  rota: Rota;

  constructor(private http: Http) { 
    let token = localStorage.getItem("token");
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', 'Bearer ' + token);
    this.options = new RequestOptions({ headers: header });
   }

  salvarRota(rota: Rota): Observable<String> {
    return this.http.post(this.apiUrl + "rota/salvar", rota, this.options)
      .map(
        res => { return res.text(); }
      );
  }

  listarRotas(): Observable<Rota[]> {
    return this.http.get(this.apiUrl + 'rota/listar', this.options)
      .map(res => {
        return res.json();
      });
  }

  removerRota(rota: Rota): Observable<String> {
    return this.http.post(this.apiUrl + 'rota/remover', rota, this.options)
      .map(
        res => res.text(),
        err => err
        );
  }
}
