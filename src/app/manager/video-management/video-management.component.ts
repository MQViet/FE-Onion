import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from './video-modal/video-modal.component';

@Component({
  selector: 'app-video-management',
  templateUrl: './video-management.component.html',
  styleUrls: ['./video-management.component.scss']
})
export class VideoManagementComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openvideoModal() {
    this.modal.open(VideoModalComponent, { size: 'xl' });
  }

}
