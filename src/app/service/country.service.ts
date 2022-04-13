import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }
  "country"=["india","usa","uae","japan","russia","singapur"];

  public getCountry(){
    return this.country;
  }
}
