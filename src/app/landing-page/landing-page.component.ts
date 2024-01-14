import { Component, OnInit } from '@angular/core';
import { CrudServicesService } from '../shared/services/crud-services.service';
import { map } from 'rxjs';
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  bannerList:any = [];

  constructor(private crudServices: CrudServicesService) { }

  ngOnInit(): void {
    this.crudServices.getAllPost("BANNERS").snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.bannerList = data;
      }
    });
  }

}
