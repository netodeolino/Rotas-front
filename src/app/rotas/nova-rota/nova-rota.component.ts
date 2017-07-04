import { Veiculo } from './../../_models/veiculo';
import { RotasService } from './../rotas.service';
import { Coordenadas } from './../../_models/coordenadas';
import { Parada } from './../../_models/parada';
import { Rota } from './../../_models/rota';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MaterializeDirective } from "angular2-materialize";

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
  veiculos: Veiculo[] = [];
  diretica: MaterializeDirective;

  @ViewChild('myname') input;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: RotasService
  ) { }

  ngOnInit() {
    this.diretica = new MaterializeDirective(this.input);
    this.aplicarValidadores();
    this.listarVeiculos();
  }

  private aplicarValidadores() {
    this.cadastro = this.formBuilder.group({
      name: ['', Validators.required],
      routeDate: ['', Validators.required],
      veiculo: ['', Validators.required]
    });
  }

  private listarVeiculos() {
    this.service.listarVeiculos().subscribe(
      lista => this.veiculos = lista,
      error => {console.log("Ocorreu um erro ao listar os Veiculos. Tente novamente mais tarde.", 3000, "red");}
    );
  }

  salvar() {
    console.log(this.rota.name);
    console.log(this.rota.vehicleId);
    console.log(this.rota.routeDate);
    /*this.service.salvarRota(this.rota).subscribe(
      res => {
        this.rota = new Rota();
        console.log("Rota adicionada com sucesso!");
        this.router.navigate(['rotas']);
      },
      err => console.log("Ocorreu um erro ao adicionar a Rota. Tente novamente mais tarde.")
    );*/
  }
}
