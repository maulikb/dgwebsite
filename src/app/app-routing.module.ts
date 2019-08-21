import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CircularKnittingFabricsComponent } from './circular-knitting-fabrics/circular-knitting-fabrics.component';

import { ParakashPolyesterComponent } from './prakash-polyester/parakash-polyester.component';
import { ParakashYarnComponent } from './prakash-yarn/parakash-yarn.component';
import { ConatctUsComponent } from './conatct-us/conatct-us.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path :'',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },  
  {
    path : 'about-us',
    component : AboutUsComponent
  },
  {
    path : 'circular-knitting-fabric',
    component : CircularKnittingFabricsComponent
  },
  
  {
    path : 'dg-polyester',
    component : ParakashPolyesterComponent
  },
  {
    path : 'warp-knitting-fabic',
    component : ParakashYarnComponent
  },
  {
    path : 'contact-us',
    component : ConatctUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
