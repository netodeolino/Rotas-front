import { RotasService } from './rotas.service';
import { RotaRoutingModule } from './rotas.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RotasComponent } from './rotas/rotas.component';
import { NovaRotaComponent } from './nova-rota/nova-rota.component';

import { LeafletModule } from '@asymmetrik/angular2-leaflet';

import { MaterializeModule } from "angular2-materialize";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RotaRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    MaterializeModule
  ],
  declarations: [
    RotasComponent,
    NovaRotaComponent
  ],
  providers: [
    RotasService
  ]
})
export class RotasModule { }
