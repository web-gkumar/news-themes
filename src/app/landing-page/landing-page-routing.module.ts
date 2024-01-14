import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  { path: '', component:LandingPageComponent},
  { path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
