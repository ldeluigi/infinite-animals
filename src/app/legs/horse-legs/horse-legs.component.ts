import { Component } from '@angular/core';
import { ElementScrollPercentage } from '../../element-scroll-percentage';
import { Legs } from '../Legs';

@Component({
  selector: 'app-horse-legs',
  templateUrl: './horse-legs.component.html',
  styles: ['pre { margin: 0; }']
})
export class HorseLegsComponent extends Legs {
  /*@HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    console.log(event);
  }*/
  constructor(elementScrollPercentage: ElementScrollPercentage) {
    super(elementScrollPercentage);
  }
}
