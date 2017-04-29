import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Router } from '@angular/router';
import { Zip } from '../zip.model';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage implements OnInit {
  // public newZip: number = null;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

}
