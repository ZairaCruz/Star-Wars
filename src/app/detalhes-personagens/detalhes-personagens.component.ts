import { Personagem } from './../modelos/personagem.model';
import { PersonagemService } from './../servicos/personagem.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonagemView } from '../modelos/personagem-view.model';

@Component({
  selector: 'app-detalhes-personagens',
  templateUrl: './detalhes-personagens.component.html'
})
export class DetalhesPersonagensComponent implements OnInit {

  parametro: Subscription;
  id: string;
  public personagem: Personagem;
  public personagemView: PersonagemView;
  public iniciarDetalhes = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public personagemService: PersonagemService) { }

  ngOnInit() {

    this.parametro = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.personagemService.porId(this.id)
        .subscribe((personagem: Personagem) => {
          this.personagem = personagem;
          this.personagemView = this.personagemService.getPersonagemFromView(this.personagem);
          this.iniciarDetalhes = true;
      });
   })
  }

}
