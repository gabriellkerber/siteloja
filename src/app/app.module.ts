import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppService } from './app.service';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SsdComponent } from './ssd/ssd.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhadoComponent } from './detalhado/detalhado.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SsdComponent,
    NotFoundComponent,
    CadastroComponent,
    DetalhadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
