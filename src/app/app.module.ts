import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';
import { Feature3Component } from './feature3/feature3.component';
import { Feature4Component } from './feature4/feature4.component';

@NgModule({
  declarations: [
    AppComponent,
    Feature1Component,
    Feature2Component,
    Feature3Component,
    Feature4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
