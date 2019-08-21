import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CircularKnittingFabricsComponent } from './circular-knitting-fabrics/circular-knitting-fabrics.component';
import { ParakashPolyesterComponent } from './prakash-polyester/parakash-polyester.component';
import { ParakashYarnComponent } from './prakash-yarn/parakash-yarn.component';
import { ConatctUsComponent } from './conatct-us/conatct-us.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    CircularKnittingFabricsComponent,
    ParakashPolyesterComponent,
    ParakashYarnComponent,
    ConatctUsComponent,
    HomeComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
