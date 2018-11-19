import { Component, OnInit } from '@angular/core';
import { Legs } from '../Legs';
import { ElementScrollPercentage } from 'src/app/element-scroll-percentage';

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
