import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './../../_models/usuario';
import { UsuarioService } from './../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  loginForm: any = {};
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: UsuarioService
  ) { }

  ngOnInit() {
    this.aplicarValidadores();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  private aplicarValidadores() {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(11)]],
      senha: ['', Validators.required]
    });
  }

  login() {
    this.service.login(this.usuario).subscribe(
      res => {
        this.router.navigate([this.returnUrl]);
      },
      err => {
        console.log("Login e/ou Senha inválido(s).", 3000, "red");
      });
  }

}
