import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from 'app/Services/data.service';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  dataArr:any = [];
  search:any;
  showModal=false;
  moviename:any;
  theater_number:any;
  randomvalue=Math.floor((Math.random() * 100) + 1);
  constructor(
    // private bsModalRef: BsModalRef,
  //   public modalService: BsModalService,
  private spinner:NgxSpinnerService,
    private dataService:DataService,
    private route:Router
  ) { }

  ngOnInit() {
    this.getMoviesDetails();
  }
  LogOut(){
    this.route.navigate(['/login']);
  }

  getMoviesDetails(){
      this.dataService.getMoviesData().subscribe(
        res=>{
          this.dataArr = res;  
          console.log(res);
        }
        
      )
    }

   bookMovie(id,seats_available,moviename,theater_number){
     this.theater_number = theater_number;
     this.moviename = moviename;
     console.log(this.moviename);
    if(seats_available == '0' || (seats_available <= '0') ){
       alert('Seats are fulled. No seats are Available!!!!');
       return;
    }
    this.spinner.show();
    this.dataService.bookMovie(id,seats_available).subscribe(res=>{
      // console.log('Record Deleted');
      this.spinner.hide();
      this.getMoviesDetails();
      this.showModal=true;
      // alert('Seat is successfully booked!!');
    })
   }

}
