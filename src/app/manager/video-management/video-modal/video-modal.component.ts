import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent implements OnInit {

  imageUrl = "https://static.thenounproject.com/png/1156517-200.png";
  videoUrl = "https://static.thenounproject.com/png/485862-200.png";
  fileImg: any;
  srcImg: any;
  fileVideo: any;
  srcVideo: any;

  formVideo!: FormGroup;
  isSubmit = false;

  constructor(
    private modal: NgbActiveModal,
    private openModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formVideo = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    this.isSubmit = true;
    if (this.formVideo.invalid) {
      return;
    }
    if (this.srcVideo == null) {
      // const open = this.openModal.open(ToastModalComponent, { size: 'sm', });
      // open.componentInstance.modal = { title: 'WARNING', messenger: 'Chọn video của bạn !', color: 'text-warning' };
      return;
    }
    if (this.srcImg == null) {
      // const open = this.openModal.open(ToastModalComponent, { size: 'sm' });
      // open.componentInstance.modal = { title: 'WARNING', messenger: 'Chọn ảnh bìa cho video của bạn !', color: 'text-warning' };
      return;
    }
  }

  get f() {
    return this.formVideo.controls;
  }

  upFile(event: any) {
    var file = event.target.files[0];
    if (file != null) {
      var checkFile = file.type.split('/')[1];
      if (checkFile != 'jpeg' && checkFile != 'png' && checkFile != 'mp4') {
        // const open = this.openModal.open(ToastModalComponent, { size: 'sm' });
        // open.componentInstance.modal = { title: 'ERROR', messenger: 'Chọn đúng định dạng ảnh(jpg, png) hoặc video(mp4) !', color: 'text-danger' };
        return;
      }
      switch (checkFile) {
        case "jpeg":
          this.fileImg = file;
          this.convertFile(file, "jpeg");
          break;
        case "png":
          this.fileImg = file;
          this.convertFile(file, "png");
          break;
        default:
          this.fileVideo = file;
          this.convertFile(file, "mp4");
          break;
      }
    }
  }

  convertFile(file: File, type: String) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      switch (type) {
        case "mp4":
          this.srcVideo = result;
          break;
        default:
          this.srcImg = result;
          break;
      }
    }
  }

  convertMegabyte(size: Byte) {
    const result = ((size / 1024) / 1024).toFixed(1);
    return result;
  }

  randomName() {
    var result = '';
    var charset = 'qwertyuiopasdfghjklzxcvbnm';
    for (let i = 0; i < 15; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  }

  closeVideoModal() {
    this.modal.close();
  }
}
