import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(private _country:CountryService) { }

  ngOnInit(): void {
    this.getcountryDetails();
  }
   countryDetails:any;

   public getcountryDetails(){
      this.countryDetails=this._country.getCountry();
   }

   // call submit 

   public onSubmit(){
    console.log(this.registrationForm);
  }

  //submit data
   registrationForm=new FormGroup({

    name:new FormControl(),
    address:new FormControl(),
    gender:new FormControl(),
    email:new FormControl(),
    contuct:new FormControl(),
    country:new FormControl(),

   })


}
