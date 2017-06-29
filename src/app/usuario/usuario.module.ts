import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuarioRoutingModule } from './usuario.routing.module';

import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { LoginComponent } from './login/login.component';

import { UsuarioService } from './usuario.service';

import { MaterializeModule } from "angular2-materialize";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsuarioRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterializeModule
  ],
  declarations: [
    NovoUsuarioComponent,
    LoginComponent
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
