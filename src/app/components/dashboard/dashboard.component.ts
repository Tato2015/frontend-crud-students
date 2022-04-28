import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private catalogService : CatalogService
  ) { }

  ngOnInit(): void {
    this.catalogService.getCatalogsByDescription('COUNTRY').subscribe(data => {
      console.log('Catalogs by description : ',data);
    })
  }

}
