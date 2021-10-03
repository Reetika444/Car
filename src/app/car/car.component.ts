import { Component, OnInit } from '@angular/core';
import { CarDetailsService } from 'app/Services/car-details.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  dataArr:any=[];
  filteredArr:any=[];
  limit:any=5;
  date:string;
  constructor(private carDetail : CarDetailsService) { }

  ngOnInit() {
    this.getCarDetails();
    this.getCarDetailsWithPagination();
  }


  getCarDetails(){
   this.carDetail.getCars().subscribe(res=>{
    this.dataArr = res;  
    // console.log(res);
   });
  }

  getCarDetailsWithDate(){
    console.log(this.date);
    this.carDetail.getCarsWithDate(this.date).subscribe(res=>{
    this.filteredArr = res;  
    console.log(this.filteredArr);
    })
  }

  getCarDetailsWithPagination(){
    console.log(this.limit);
    var date="";
    var vehicle_type_code2="";

    this.carDetail.getCarDetailsWithPagination(this.limit,date,vehicle_type_code2).subscribe(res=>{
    this.filteredArr = res;  
    console.log(this.filteredArr);
    })
  }

}
