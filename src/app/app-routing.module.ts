import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SsdComponent } from './ssd/ssd.component';
import { HdComponent } from './hd/hd.component';
import { TelaNoteComponent } from './tela-note/tela-note.component';
import { RamComponent } from './ram/ram.component';
import { TelCelComponent } from './tel-cel/tel-cel.component';
import { BateriaComponent } from './bateria/bateria.component';
import { CoolerComponent } from './cooler/cooler.component';
import { GabineteComponent } from './gabinete/gabinete.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'SSD', component: SsdComponent},
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'HD', component: HdComponent },
  { path: 'TELANOTE', component: TelaNoteComponent },
  { path: 'RAM', component: RamComponent },
  { path: 'TELACEL', component: TelCelComponent },
  { path: 'BATERIA', component: BateriaComponent },
  { path: 'COOLER', component: CoolerComponent },
  { path: 'GABINETE', component: GabineteComponent },
 //* { path: '**', component: NotFoundComponent }*//
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
