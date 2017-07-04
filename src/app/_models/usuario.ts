import { Permissao } from './permissao';
export class Usuario {
    id: number;
    nome: string;
    login: string;
    senha: string;
    permissoes: string[] = [];
}
