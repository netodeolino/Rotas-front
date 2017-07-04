import { Coordenadas } from './coordenadas';
import { Parada } from './parada';

export class Rota {
    rotaId: number;
    name: string;
    routeDate: any;
    vehicleId: number;
    stops: Parada[] = [];
    path: Coordenadas[] = [];
}
