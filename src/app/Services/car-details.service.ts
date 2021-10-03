import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CarDetailsService {

  constructor(  private httpClient:HttpClient) { }


  getCars(){
    // debugger;
   var car =  this.httpClient.get('https://data.cityofnewyork.us/resource/h9gi-nx95.json');
  
   console.log(car);
   return car;
   }

   getCarsWithDate(date){
     console.log(date);
    var car =  this.httpClient.get('https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=date');
  
    // console.log(car);
    return car;
   }

   getCarDetailsWithPagination(limit,date,vehicle_type_code2){
     var size=limit;
    let params = new HttpParams();
    // params = params.append('_page', 1);
    params = params.append('$limit', '5');
    params = params.append('vehicle_type_code2', '5');
    params = params.append('$offset', '0');
    params = params.append('crash_date', '5');

    var carswithpage =  this.httpClient.get('https://data.cityofnewyork.us/resource/h9gi-nx95.json',{params: params});
    // var carswithpage =  this.httpClient.get('https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=2014-01-21T00:00:00.000&vehicle_type_code2=PASSENGER%20VEHICLE&$offset=0',{params: params});
   console.log(carswithpage);
    return carswithpage;
   }
}
