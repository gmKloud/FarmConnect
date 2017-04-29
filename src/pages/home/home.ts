import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Router } from '@angular/router';
// import { Zip } from '../zip.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public newZip: number = null;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  // public clickedSaveButton(){
  //   var reqZip = new Zip(this.newZip);
  //   var accessURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + reqZip;
  //   this.router.navigate(['results');
  // }

}
