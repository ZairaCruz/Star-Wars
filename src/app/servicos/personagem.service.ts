import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonagemService {

  rota = 'https://swapi.co/api/';

  constructor(private _http: HttpClient) {
  }

  listar() {
    return this._http.get('https://swapi.co/api/people');
  }

}
