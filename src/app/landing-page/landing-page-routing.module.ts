import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { NewsComponent } from './news/news.component';
import { WebSeriesComponent } from './web-series/web-series.component';
import { DetailsPageComponent } from './details-page/details-page.component';


const routes: Routes = [
  { path: '', component:LandingPageComponent},
  { path: 'news', component: NewsComponent}, 
  { path: 'web-series', component: WebSeriesComponent},
  { path: 'web-series/:id', component: DetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
