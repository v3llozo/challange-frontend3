import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, BannerComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
