import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    let c: number = 1;
    let e: string = 'a';
    let g: boolean = true;
    let h: object = {};
    let i = [c, c, e, g, h];
    let j: boolean [] = [true, false];
    let k: object[] = [{}, h];
    let l: any[] = [1, 'asd', {}];

    console.log(i);
  }

  ngOnInit() {
  }

}
