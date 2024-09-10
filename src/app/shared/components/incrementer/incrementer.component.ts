import { Component, OnInit } from '@angular/core';
import { IncrementerService } from '../../services/incrementer.service';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss'],
})
export class IncrementerComponent {
  valor:number = 0;

  constructor(
    public incrementService: IncrementerService
  ) { }
  
  decrement(){
    if (this.incrementService.valor > 0)
    this.incrementService.valor--;
  }

  increment(){
    this.incrementService.valor++;

  }

}
