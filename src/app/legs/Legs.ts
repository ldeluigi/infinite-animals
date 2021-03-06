import { OnInit, HostListener, Directive } from '@angular/core';
import { ElementScrollPercentage } from '../element-scroll-percentage';
import { range } from 'rxjs';


@Directive()
export class Legs implements OnInit {
  private startSegments: number = 10;
  public segments = [];

  constructor(private elementScrollPercentage: ElementScrollPercentage) {
    for (let i = 0; i < this.startSegments; i++) {
      this.addLegSegment();
    }
  }

  ngOnInit() {
    this.elementScrollPercentage
      .getScrollAsStream() // Defaults to Document if no Element supplied.
      .subscribe(
        (percent: number): void => {
          if (percent > 90) {
            this.addLegSegment();
          }
        }
      )
      ;
  }

  private addLegSegment() {
    this.segments.push(null);
  }
}
