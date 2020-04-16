import { Component } from '@angular/core';
import { Legs } from '../../../legs/Legs';
import { ElementScrollPercentage } from '../../../element-scroll-percentage';

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
