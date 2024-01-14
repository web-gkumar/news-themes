import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };


  imgurl = "assets/img/banner/"

  slidderimg = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg', 'banner4.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}
