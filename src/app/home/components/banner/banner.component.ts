import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/images/banner6.jpg',
    'assets/images/banner4.jpg',
    'assets/images/banner5.jpg',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
