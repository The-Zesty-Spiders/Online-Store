import { AnimationConfig, ICarouselConfig } from 'angular4-carousel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageSources: string[] = [
    'assets/images/test.jpg',
    'assets/images/test.jpg',
    'assets/images/test.jpg'
 ];

 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 5000,
   stopAutoplayMinWidth: 768
 };


  constructor() { }

  ngOnInit() {
  }

}
