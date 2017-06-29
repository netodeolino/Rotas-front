import { Usuario } from './../../_models/usuario';
import { UsuarioService } from './../usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  cadastro: any = {};
  usuario: Usuario = new Usuario();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: UsuarioService
  ) { }

  ngOnInit() {
    this.aplicarValidadores();
  }

  private aplicarValidadores() {
    this.cadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  salvar() {
    this.service.salvarUsuario(this.usuario).subscribe(
      res => {
        this.usuario = new Usuario();
        console.log("Usuário adicionado com sucesso!", 3000, "green");
        this.router.navigate(['usuario']);
      },
      err => console.log("Ocorreu um erro ao adicionar o Usuário. Tente novamente mais tarde.", 3000, "red")
    );
  }

}
