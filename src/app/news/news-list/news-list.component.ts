import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  apiLoaded = false;

  videolist = [
    { 'title': 'Aaj Tak', 'poster': 'aajtak', 'videoId': 'Cy_6-_XUW-c', 'compayName': 'Aaj Tak' },
    { 'title': 'TV 9', 'poster': 'tv9', 'videoId': 'ADQqpdCtAHs', 'compayName': 'TV 9' },
    { 'title': 'Republic Bharat', 'poster': 'rbharat', 'videoId': 'qfrocHBy6RQ', 'compayName': 'Republic Bharat' },
    { 'title': 'ABP News', 'poster': 'abpnews', 'videoId': 'nyd-xznCpJc', 'compayName': 'ABP News' },
    { 'title': 'News 18', 'poster': 'news18', 'videoId': 'dgtBaZmL3RQ', 'compayName': 'News 18' },
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
