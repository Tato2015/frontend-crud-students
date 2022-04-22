import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../_model/student';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends GenericService<Student>{

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/students`)
  }
}
