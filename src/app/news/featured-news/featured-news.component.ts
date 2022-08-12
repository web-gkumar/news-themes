import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-news',
  templateUrl: './featured-news.component.html',
  styleUrls: ['./featured-news.component.scss']
})
export class FeaturedNewsComponent implements OnInit {


  videolist = [
    { 'title': 'Title 1', 'poster': 'login.jpg', 'videoUrl': 'abc.com', 'compayName': 'New1' },
    { 'title': 'Title 2', 'poster': 'login.jpg', 'videoUrl': 'abc.com', 'compayName': 'New2' },
    { 'title': 'Title 3', 'poster': 'login.jpg', 'videoUrl': 'abc.com', 'compayName': 'New3' },
    { 'title': 'Title 4', 'poster': 'login.jpg', 'videoUrl': 'abc.com', 'compayName': 'New4' },
    { 'title': 'Title 5', 'poster': 'login.jpg', 'videoUrl': 'abc.com', 'compayName': 'New5' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
