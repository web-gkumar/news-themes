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

  studentList = [
    {"id": "15", "name": "Keshav", "age": "22", "rollno": "97", "subject": "CS"},
    {"id": "97", "name": "Rahul", "age": "25", "rollno": "78", "subject": "CS"},
    {"id": "97", "name": "Vikas", "age": "56", "rollno": "78", "subject": "CS"},
    {"id": "97", "name": "raghav", "age": "589", "rollno": "18", "subject": "CS"},
  ]




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
