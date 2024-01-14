import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from '../include/material/material.module';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { LandingPageComponent } from './landing-page.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SwiperModule,
    YouTubePlayerModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
