import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { NewsRoutingModule } from './news-routing.module';
import { MaterialModule } from '../material/material.module';
import { FeaturedNewsComponent } from './featured-news/featured-news.component';


@NgModule({
  declarations: [
    FeaturedNewsComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    MaterialModule,
    NewsRoutingModule
  ],
  exports: [
    FeaturedNewsComponent
  ]
})
export class NewsModule { }
