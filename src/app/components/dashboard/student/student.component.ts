import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit,OnDestroy {

  title !: string

  constructor(private router: Router,
    private _sharedService: SharedService) { }

  ngOnInit(): void {
    console.log('Ini - Student ngOnInit');
    this._sharedService.changeStudentTitle('Students');
    this._sharedService.studentTitleMessage.subscribe(message => this.title = message);    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Ini - Student ngOnDestroy');
    
  }

  redirectShowStudents(){    
    this.title = 'Students';
    this.router.navigate(['/dashboard/students/student-grid']);
  }

  redirectCreateStudents(){
    this.title = 'Create Student';
    this.router.navigate(['/dashboard/students/student-create']);
  }



}
