import { RotasService } from './../rotas.service';
import { Coordenadas } from './../../_models/coordenadas';
import { Parada } from './../../_models/parada';
import { Rota } from './../../_models/rota';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nova-rota',
  templateUrl: './nova-rota.component.html',
  styleUrls: ['./nova-rota.component.css']
})
export class NovaRotaComponent implements OnInit {

  cadastro: any = {};
  rota: Rota = new Rota();
  stops: Parada[] = [];
  path: Coordenadas[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: RotasService
  ) { }

  ngOnInit() {
    this.aplicarValidadores();
  }

  private aplicarValidadores() {
    this.cadastro = this.formBuilder.group({
      name: ['', Validators.required],
      routeDate: ['', Validators.required],
      vehicleId: ['', Validators.required]
    });
  }

  salvar() {
    this.service.salvarRota(this.rota).subscribe(
      res => {
        this.rota = new Rota();
        console.log("Sala adicionada com sucesso!", 3000, "green");
        this.router.navigate(['rotas']);
      },
      err => console.log("Ocorreu um erro ao adicionar a Rota. Tente novamente mais tarde.", 3000, "red")
    );
  }
}
