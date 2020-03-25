import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button';
import { SsdComponent } from './ssd/ssd.component';
import { HdComponent } from './hd/hd.component';
import { TelaNoteComponent } from './tela-note/tela-note.component';
import { RamComponent } from './ram/ram.component';
import { TelCelComponent } from './tel-cel/tel-cel.component';
import { BateriaComponent } from './bateria/bateria.component';
import { CoolerComponent } from './cooler/cooler.component';
import { GabineteComponent } from './gabinete/gabinete.component';
import { NotFoundComponent } from './not-found/not-found.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SsdComponent,
    HdComponent,
    TelaNoteComponent,
    RamComponent,
    TelCelComponent,
    BateriaComponent,
    CoolerComponent,
    GabineteComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
