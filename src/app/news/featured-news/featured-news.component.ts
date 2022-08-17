import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-news',
  templateUrl: './featured-news.component.html',
  styleUrls: ['./featured-news.component.scss']
})
export class FeaturedNewsComponent implements OnInit {

  apiLoaded = false;

  videolist = [
    { 'title': 'Aaj Tak', 'poster': 'aajtak', 'videoId': 'Cy_6-_XUW-c', 'compayName': '1' },
    { 'title': 'TV 9', 'poster': 'tv9', 'videoId': 'ADQqpdCtAHs', 'compayName': '2' },
    { 'title': 'Republic Bharat', 'poster': 'rbharat', 'videoId': 'qfrocHBy6RQ', 'compayName': '3' },
    { 'title': 'ABP News', 'poster': 'abpnews', 'videoId': 'nyd-xznCpJc', 'compayName': '4' },
    { 'title': 'News 18', 'poster': 'news18', 'videoId': 'dgtBaZmL3RQ', 'compayName': '5' },
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
