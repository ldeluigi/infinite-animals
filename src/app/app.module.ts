import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorseComponent } from './animals/horse/horse.component';
import { HorseLegsComponent } from './legs/horse-legs/horse-legs.component';
import { ElementScrollPercentageDirective } from './element-scroll-percentage.directive';
import { GiraffeComponent } from './animals/giraffe/giraffe.component';
import { GiraffeLegsComponent } from './legs/giraffe-legs/giraffe-legs.component';
import { DeerLegsComponent } from './legs/deer-legs/deer-legs.component';
import { DeerComponent } from './animals/deer/deer.component';

@NgModule({
  declarations: [
    AppComponent,
    HorseComponent,
    HorseLegsComponent,
    ElementScrollPercentageDirective,
    GiraffeComponent,
    GiraffeLegsComponent,
    DeerLegsComponent,
    DeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
