import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  constructor (private httpService: HttpClient) { }
  arrBirds: string [];

  ngOnInit () {
    this.httpService.get('./assets/json.json').subscribe(
      data => {
        this.arrBirds = data as string [];	   
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
