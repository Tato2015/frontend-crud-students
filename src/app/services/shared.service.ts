import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private studentTitle = new BehaviorSubject('');
  studentTitleMessage = this.studentTitle.asObservable();

  constructor() { }

  changeStudentTitle(message: string) {
    this.studentTitle.next(message)
  }

}
