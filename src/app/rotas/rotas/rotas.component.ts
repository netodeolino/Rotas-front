import { RotasService } from './../rotas.service';
import { Router } from '@angular/router';
import { Rota } from './../../_models/rota';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css']
})
export class RotasComponent implements OnInit {
  
  rotas: Rota[] = [];

  constructor(
    private router: Router,
    private service: RotasService
  ) { }

  options = {
  	layers: [
	  	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
	  ],
	  zoom: 5,
	  center: L.latLng({ lat: -3.734634, lng: -38.4714469 })
  };

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.listarRotas().subscribe(
      lista => this.rotas = lista,
      error => {console.log("Ocorreu um erro ao listar as Rotas. Tente novamente mais tarde.", 3000, "red")}
    );
  }

  editar(rota: Rota) {
    this.service.rota = rota;
    this.router.navigate(['/rota/editar']);
  }

  excluir(rota: Rota) {
    this.service.removerRota(rota).subscribe(
      res => [
        console.log("Bloco excluído com sucesso!", 3000, "green"),
        this.listar()
      ],
      erro => console.log("Ocorreu um erro ao excluir o Bloco. Tente novamente mais tarde.", 3000, "red")
    );
  }
}
