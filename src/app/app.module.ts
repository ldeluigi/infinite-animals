import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorseComponent } from './animals/horse/horse.component';
import { HorseLegsComponent } from './animals/horse/horse-legs/horse-legs.component';
import { ElementScrollPercentageDirective } from './element-scroll-percentage.directive';
import { GiraffeComponent } from './animals/giraffe/giraffe.component';
import { GiraffeLegsComponent } from './animals/giraffe/giraffe-legs/giraffe-legs.component';
import { DeerLegsComponent } from './animals/deer/deer-legs/deer-legs.component';
import { DeerComponent } from './animals/deer/deer.component';
import { RhinoComponent } from './animals/rhino/rhino.component';
import { RhinoLegsComponent } from './animals/rhino/rhino-legs/rhino-legs.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementScrollPercentageDirective,
    HorseLegsComponent,
    HorseComponent,
    GiraffeLegsComponent,
    GiraffeComponent,
    DeerLegsComponent,
    DeerComponent,
    RhinoLegsComponent,
    RhinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
