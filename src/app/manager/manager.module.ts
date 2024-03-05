import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { VideoManagementComponent } from './video-management/video-management.component';
import { VideoModalComponent } from './video-management/video-modal/video-modal.component';
import { LayoutModule } from '../layout/layout.module';
import { SharesModule } from '../shares/shares.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ManagerComponent,
    VideoManagementComponent,
    VideoModalComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    LayoutModule,
    SharesModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
