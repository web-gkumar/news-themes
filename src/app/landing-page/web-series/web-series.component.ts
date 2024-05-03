import { Component, OnInit } from '@angular/core';
import { CrudServicesService } from '../../shared/services/crud-services.service';
import { DetailsPageComponent } from '../details-page/details-page.component';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs';


@Component({
  selector: 'app-web-series',
  templateUrl: './web-series.component.html',
  styleUrls: ['./web-series.component.scss']
})
export class WebSeriesComponent implements OnInit {

  webSeriesList:any = [];

  constructor(public dialog: MatDialog, private crudServices: CrudServicesService) {
    this.crudServices.getAllPost("MOVIES").snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.webSeriesList = data;
      }
    });
  }

  ngOnInit(): void {  }



  openDialog(data:any) {
    this.dialog.open(DetailsPageComponent, {
      data
    });
  }

}
