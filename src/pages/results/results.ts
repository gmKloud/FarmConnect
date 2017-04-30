import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Router } from '@angular/router';
import { Market } from '.././services/market.model';
// import { FarmConnService } from '../services/farmconnservice';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage implements OnInit {
// markets: Market[];
name: string;
address: string;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    // this.getMarkets()
  }

  // getMarkets(){
  //   this.farmconnservice.getMarkets()
  //   .subscribe(
  //     data => this.markets = JSON.stringify(data),
  //     error => alert(error),
  //     () => console.log("Finished")
  //   );
  // }

}
