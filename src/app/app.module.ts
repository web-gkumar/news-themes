import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Module
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from './material/material.module';
import { NewsModule } from './news/news.module';
// Component
import { BannerComponent } from './include/banner/banner.component';
import { FooterComponent } from './include/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    MaterialModule,
    NewsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
