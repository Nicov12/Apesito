import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  img: string;

  constructor() { }

  ngOnInit() {
    this.img = 'https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png';
  }

}
