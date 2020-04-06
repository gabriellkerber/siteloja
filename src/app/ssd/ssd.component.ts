import { Component, OnInit } from '@angular/core';
import { Ssd } from '../models/ssd.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ssd',
  templateUrl: './ssd.component.html',
  styleUrls: ['./ssd.component.scss']
})
export class SsdComponent implements OnInit {


  constructor(public appService: AppService) { 
    
  }

  ngOnInit(): void {
  }
  

}
