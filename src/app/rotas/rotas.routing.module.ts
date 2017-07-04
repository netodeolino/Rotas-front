import { NovaRotaComponent } from './nova-rota/nova-rota.component';
import { RotasComponent } from './rotas/rotas.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';


const rotaRoutes: Routes = [
    { path: '', component: RotasComponent },
    { path: 'nova', component: NovaRotaComponent },
];

@NgModule({
    imports: [RouterModule.forChild(rotaRoutes)],
    exports: [RouterModule]
})
export class RotaRoutingModule {

}
