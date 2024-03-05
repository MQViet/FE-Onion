import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratio-image',
  templateUrl: './ratio-image.component.html',
  styleUrls: ['./ratio-image.component.scss']
})
export class RatioImageComponent implements OnInit {

  @Input() imageUrl!: String;
  @Input() srcImg: any;

  constructor() { }

  ngOnInit(): void {
  }

}
