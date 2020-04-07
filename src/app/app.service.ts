import { Injectable } from '@angular/core';
import { Ssd } from './models/ssd.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  dados: Ssd [] = [];

  constructor() {}


}
