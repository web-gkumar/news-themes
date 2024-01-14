import { Component, OnInit } from '@angular/core';
import { CrudServicesService } from '../../shared/services/crud-services.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  dataList:any = [];


  constructor(private crudServices: CrudServicesService) { }

  ngOnInit(): void {
    this.getAllNews();
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }


  getAllNews() {
    this.crudServices.getAllPost("NEWS").snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.dataList = data;
      }
    });
  }




}
