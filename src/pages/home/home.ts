import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Router } from '@angular/router';
// import { FarmConnService } from '../services/farmconnservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  // providers: [FarmConnService]
})
export class HomePage {
  public zip: number;
  getZip: number;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  //
  //  subToGet() {
  //    .subscribe(
  //      data => this.getZip = JSON.stringify(data),
  //      error => alert(error),
  //      () => console.log("Finished")
  //    );
  //  }
  // { this.submitted = true;
  //   console.log("") }

  // public clickedSaveButton(){
  //   var reqZip = new Zip(this.newZip);
  //   var accessURL = "" + reqZip;
  //   this.router.navigate(['results');
  // }

}
