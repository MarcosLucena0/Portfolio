import { Component } from '@angular/core';
import { InicioComponent } from '../../pages/inicio/inicio.component';
import { SobreComponent } from '../../pages/sobre/sobre.component';
import { ProjetosComponent } from '../../pages/projetos/projetos.component';
import { FormacaoComponent } from '../../pages/formacao/formacao.component';
import { ContatoComponent } from '../../pages/contato/contato.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InicioComponent,
    SobreComponent,
    ProjetosComponent,
    FormacaoComponent,
    ContatoComponent,
  ],
  template: `
    <app-inicio></app-inicio>
    <app-sobre></app-sobre>
    <app-projetos></app-projetos>
    <app-formacao></app-formacao>
    <app-contato></app-contato>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
