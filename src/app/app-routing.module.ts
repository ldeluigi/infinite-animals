import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorseComponent } from './animals/horse/horse.component';
import { GiraffeComponent } from './animals/giraffe/giraffe.component';
import { DeerComponent } from './animals/deer/deer.component';

const routes: Routes = [
  { path: '', redirectTo: 'horse', pathMatch: 'full' },
  { path: 'horse', component: HorseComponent },
  { path: 'giraffe', component: GiraffeComponent },
  { path: 'deer', component: DeerComponent },
  { path: '**', redirectTo: 'horse', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
