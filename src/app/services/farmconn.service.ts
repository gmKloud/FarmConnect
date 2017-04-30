// import {Injectable} from '@angular/core';
// import {Http, Response } from '@angular/http';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
//
// import { Market } from './market';
//
// @Injectable()
// export class FarmConnService{
//     http:any;
//     baseUrl: String;
//
//     constructor(http:Http){
//         this.http = http;
//         this.baseUrl = 'https://www.reeddit.com/r';
//     }
//
//     getPosts(category, limit){
//         return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
//             .map(res => res.json());
//     }
//
//     // getMarkets(): Observable<Market[]> {
//     //     return this.http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' + zip )
//     //     .map(res => <Market>res.json())
//     // }
//
//
// }
