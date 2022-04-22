import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {

  constructor(protected http: HttpClient,
    @Inject(String) protected url: string) { }

  getAll() {
    return this.http.get<T[]>(this.url);
  }

}
