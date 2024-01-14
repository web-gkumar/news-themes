import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor() {}

  menu:any = [
    {
      title: 'Home',
      icon: 'home',
      link: '/',
    },
    {
      title: 'News',
      icon: 'layers',
      link: 'news',
    }
  ];
}
