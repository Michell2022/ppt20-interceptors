import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BreakingComponent } from './breaking/breaking.component';



@NgModule({
  declarations: [
    HomeComponent,
    BreakingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
