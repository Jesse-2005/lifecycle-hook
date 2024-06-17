import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ClassDirective } from './class.directive';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ClassDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
