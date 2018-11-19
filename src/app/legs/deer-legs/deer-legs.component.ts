import { Component } from '@angular/core';
import { Legs } from '../Legs';
import { ElementScrollPercentage } from 'src/app/element-scroll-percentage';

@Component({
  selector: 'app-deer-legs',
  templateUrl: './deer-legs.component.html',
  styles: ['pre { margin: 0; }']
})
export class DeerLegsComponent extends Legs {

  constructor(elementScrollPercentage: ElementScrollPercentage) {
    super(elementScrollPercentage);
  }

}
