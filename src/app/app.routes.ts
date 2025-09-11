import { Routes } from '@angular/router';
import { MaisProjetosComponent } from './pages/mais-projetos/mais-projetos.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Landing page
  { path: 'mais-projetos', component: MaisProjetosComponent } // Página separada
];
