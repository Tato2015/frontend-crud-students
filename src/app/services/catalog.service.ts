import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CatalogDto } from '../_model/catalog';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService extends GenericService<CatalogDto>{

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/catalogs`)
  }

  getCatalogsByDescription(description:string){
    return this.http.get<CatalogDto[]>(this.url+'?description='+description);
  }

}
