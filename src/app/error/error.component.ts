import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }
  myFunction(abc:any){
    console.log("hi :"+abc);
  }
  ngOnInit(): void {
  }

}
