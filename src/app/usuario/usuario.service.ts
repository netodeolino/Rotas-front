import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Usuario } from "./../_models/usuario";

@Injectable()
export class UsuarioService {

  private apiUrl:string = 'http://localhost:8080/';

  private options: RequestOptions;

  usuario: Usuario;

  constructor(private http: Http) {}

  login(usuario: Usuario) : Observable<String> {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    header.append('Access-Control-Allow-Credentials', "true");

    this.options = new RequestOptions({ headers: header });

    return this.http.post(this.apiUrl + 'usuario/login', usuario, this.options)
      .map(res => {
        localStorage.setItem('token', res.text());
        let token = localStorage.getItem("token");
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', 'Bearer ' + token);
        this.options = new RequestOptions({ headers: header });
        return "sucesso";
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  salvarUsuario(usuario: Usuario): Observable<String> {
    return this.http.post(this.apiUrl + "usuario/salvar", usuario, this.options)
      .map(
        res => { return res.text(); }
      );
  }
}
