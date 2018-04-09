import { Filme } from './../modelos/filme.model';
import { Personagem } from './../modelos/personagem.model';
import { PersonagemView } from './../modelos/personagem-view.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmeService } from './filme.service';

@Injectable()
export class PersonagemService {

  rota = 'https://swapi.co/api/';

  constructor(private _http: HttpClient,
              private filmeService: FilmeService) {
  }

  listar() {
    return this._http.get(this.rota + 'people');
  }

  paginacao(pagina: any) {
    return this._http.get(pagina).pipe(response => response);
  }

  porId(id: string) {
    return this._http.get(this.rota + 'people' + id).pipe(response => response);
  }

  getPersonagemFromView(personagem: Personagem): PersonagemView {
    let personagemView: PersonagemView = new PersonagemView();
    let filmes: string[] = [];
    
    personagemView.id = this.extrairId(personagem.url, 30);
    personagemView.imagem = '../assets/imagens/' + this.extrairId(personagem.url, 30) + '.png';
    personagemView.name = personagem.name;
    if(personagem.gender === 'male'){
      personagemView.gender = 'Masculino';
    } 
    if(personagem.gender === 'female'){
      personagemView.gender = 'Feminino';
    }
    if(personagem.gender !== 'female' && personagem.gender !== 'male'){
      personagemView.gender = 'Indefinido';
    }
    personagemView.eye_color = personagem.eye_color;
    personagemView.height = personagem.height;
    personagemView.mass = personagem.mass;
    personagemView.url = personagem.url;
    
    
    return personagemView;
  }

  /**
   * Função que permite extrair id do personagem.
   * @param link url do personagem
   * @param tamanho tamanho da url
   */
  extrairId(link: string, tamanho: number): string {
    let url = link.toString();
    let id;

    if(url.length === tamanho) {
      id = url.charAt(url.length-2);
    } else {
      id = url.charAt(url.length-3) + url.charAt(url.length-2);
    }
    return id;
  }
}
