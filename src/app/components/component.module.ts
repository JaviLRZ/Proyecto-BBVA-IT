import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagesModule } from '../pages/pages.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    SearchComponent
  ]
})
export class ComponentModule { }
