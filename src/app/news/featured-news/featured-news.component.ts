import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-news',
  templateUrl: './featured-news.component.html',
  styleUrls: ['./featured-news.component.scss']
})
export class FeaturedNewsComponent implements OnInit {

  apiLoaded = false;

  videolist = [
    { 'title': 'Aaj Tak', 'poster': 'login.jpg', 'videoId': 'Cy_6-_XUW-c', 'compayName': '1' },
    { 'title': 'TV 9', 'poster': 'login.jpg', 'videoId': 'ADQqpdCtAHs', 'compayName': '2' },
    { 'title': 'Republic Bharat', 'poster': 'login.jpg', 'videoId': 'qfrocHBy6RQ', 'compayName': '3' },
    { 'title': 'ABP News', 'poster': 'login.jpg', 'videoId': 'nyd-xznCpJc', 'compayName': '4' },
    { 'title': 'Title 5', 'poster': 'login.jpg', 'videoId': 'KauOtgNuzQQ', 'compayName': '5' },
  ]

  constructor() { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

}
