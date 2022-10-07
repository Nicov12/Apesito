import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  img: string;
  constructor() {}

  ngOnInit() {
    this.img = 'https://plantillasdememes.com/img/plantillas/garcias01605419397.jpg';
  }

}
