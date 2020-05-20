import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navText: ["<a class='am-next'><i class='fas fa-long-arrow-alt-left' ></i></a>",
    "<a class='am-prev'><i class='fas fa-long-arrow-alt-right'></i></a>"],
    responsive: {
      0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:5
    }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
