import { UsuarioService } from './usuario/usuario.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  exibirMenu: boolean = false;

  constructor(private router: Router, private usuariosService: UsuarioService) {}

  ngOnInit() {
  }

  ngDoCheck() {
    if (localStorage.getItem('token')) {
      this.exibirMenu = true;
    }
  }

  logout() {
    this.usuariosService.logout();
    this.exibirMenu = false;
    this.router.navigate(['/usuario/login']);
  }
}
