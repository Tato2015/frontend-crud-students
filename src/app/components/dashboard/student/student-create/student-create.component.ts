import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';



@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {


  gender: any[] = ['Seleccione','Male','Female'];
  countries : any [] = ['Seleccione','Peru','United States']
  cities : any [] = ['Seleccione','Lima','New York']
  maritalStatus : any [] = ['Seleccione','Single','Married','Widowed','Separated','Others'];

  form !:FormGroup;

  constructor(private _sharedService : SharedService,
    private fb: FormBuilder) { 
      this.form = this.fb.group({
        name : ['',Validators.required],
        gender : ['',Validators.required],
        address : ['',Validators.required],
        lastName : ['',Validators.required],
        phoneOne : ['',Validators.required],
        countries : ['',Validators.required],
        birthday : ['',Validators.required],
        phoneTwo : ['',Validators.required],
        cities : ['',Validators.required],
        identification : ['',Validators.required],
        phoneReference : ['',Validators.required],
        postalCode : ['',Validators.required],
        email : ['',Validators.required],
        maritalStatus : ['',Validators.required],
        otherMaritalStatus : ['',Validators.required],
  
      });
    }

  ngOnInit(): void {
    console.log('Ini - StudentCreate ngOnInit');
    this._sharedService.changeStudentTitle('Create Student');
  }

  

 

}
