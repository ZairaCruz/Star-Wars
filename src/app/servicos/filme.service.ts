import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FilmeService {

  rota = 'https://swapi.co/api/';

  constructor(private _http: HttpClient) {
  }

  listar() {
    return this._http.get(this.rota + 'films');
  }

  porPersonagem(films: string) {
    return this._http.get(films);
  }
}