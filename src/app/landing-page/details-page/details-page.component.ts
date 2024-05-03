import { Component, OnInit } from '@angular/core';
import { CrudServicesService } from '../../shared/services/crud-services.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  detailsData:any;
  currentDataId:any = '';

  constructor(
    private route: ActivatedRoute,
    private crudServices: CrudServicesService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentDataId = params.get('id')
    });
    this.crudServices.getItemById(this.currentDataId, 'MOVIES').subscribe(item => {
      this.detailsData = item;
    });
  }

}
