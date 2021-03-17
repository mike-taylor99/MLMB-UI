import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  //images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    'http://d279m997dpfwgl.cloudfront.net/wp/2014/04/0409_oag_uconn-champs-1000x666.jpg',
    'http://media.masslive.com/sports_impact/photo/11205820-large.jpg',
    'https://ca-times.brightspotcdn.com/dims4/default/b9defdb/2147483647/strip/true/crop/2048x1365+0+0/resize/1486x990!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3a%2F14%2F5cc49a9b4140b6d49ea070889723%2Fmarch1.png'

  ]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

}