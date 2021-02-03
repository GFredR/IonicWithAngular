import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @ViewChild('EXIDslide') EXIDslide;
  slidesOpts = {
    effect: 'flip',
    autoplay: {
      delay: 2000
    },
    loop: true
  };
  constructor() { }

  ngOnInit() {}

}
