import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratio-video',
  templateUrl: './ratio-video.component.html',
  styleUrls: ['./ratio-video.component.scss']
})
export class RatioVideoComponent implements OnInit {

  @Input() videoUrl!: String;
  @Input() srcVideo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
