import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SsdComponent } from './ssd/ssd.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhadoComponent } from './detalhado/detalhado.component';


const routes: Routes = [

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path:'Home', component: SsdComponent},
  { path: 'Cadastro', component: CadastroComponent },
  { path: 'Detalhes/:id', component: DetalhadoComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
