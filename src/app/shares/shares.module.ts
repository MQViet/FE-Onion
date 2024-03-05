import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { BackgroundComponent } from './background/background.component';
import { RatioImageComponent } from './ratio-image/ratio-image.component';
import { RatioVideoComponent } from './ratio-video/ratio-video.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AvatarComponent,
    BackgroundComponent,
    RatioImageComponent,
    RatioVideoComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RatioImageComponent,
    RatioVideoComponent,
    AvatarComponent,
    BackgroundComponent,
    SearchComponent
  ]
})
export class SharesModule { }
