import { Component } from '@angular/core';
import { Legs } from '../../../legs/Legs';
import { ElementScrollPercentage } from '../../../element-scroll-percentage';

@Component({
  selector: 'app-rhino-legs',
  templateUrl: './rhino-legs.component.html',
  styles: ['pre { margin: 0; }']
})
export class RhinoLegsComponent extends Legs {

  constructor(elementScrollPercentage: ElementScrollPercentage) {
    super(elementScrollPercentage);
  }

}
