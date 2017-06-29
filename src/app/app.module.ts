import { AutenticacaoGuard } from './_guards/autenticacao.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsuarioService } from './usuario/usuario.service';
import { AppRoutingModule } from './app.routing.module';

import { LeafletModule } from '@asymmetrik/angular2-leaflet';

import { MaterializeModule } from "angular2-materialize";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LeafletModule,
    MaterializeModule
  ],
  providers: [
    UsuarioService,
    AutenticacaoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
