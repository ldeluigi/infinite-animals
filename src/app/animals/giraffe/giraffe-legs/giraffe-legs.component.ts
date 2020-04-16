import { Component, OnInit } from '@angular/core';
import { Legs } from '../../../legs/Legs';
import { ElementScrollPercentage } from '../../../element-scroll-percentage';

@Component({
  selector: 'app-giraffe-legs',
  templateUrl: './giraffe-legs.component.html',
  styles: ['pre { margin: 0; }']
})
export class GiraffeLegsComponent extends Legs {

  constructor(elementScrollPercentage: ElementScrollPercentage) {
    super(elementScrollPercentage);
  }

}
