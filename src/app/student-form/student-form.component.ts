import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  formData:any=[];
  constructor(private _country:CountryService) { }

  ngOnInit(): void {
    this.getcountryDetails();
    this.formData=[];
    
  }
   countryDetails:any;

   public getcountryDetails(){
      this.countryDetails=this._country.getCountry();
   }

   // call submit 

   public onSubmit(){
    console.log(this.registrationForm);
    this.formData.push(this.registrationForm.value);
    
  }

  //submit data
   registrationForm=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    gender:new FormControl('', Validators.required),
    email:new FormControl(''),
    contuct:new FormControl(''),
    country:new FormControl(''),

   })

   changeGender(e:any) {
    console.log(e.target.value);
  }
  


}
