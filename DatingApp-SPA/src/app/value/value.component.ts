import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValue();
  }
  getValue() {
    this.http.get('https://localhost:44315/weatherforecast').subscribe(
      x => {
        this.values = x;
        // tslint:disable-next-line: no-shadowed-variable
      },
      error => {
        console.log(error);
      }
    );
  }
}
