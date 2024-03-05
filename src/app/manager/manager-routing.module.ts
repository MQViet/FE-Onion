import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoManagementComponent } from './video-management/video-management.component';

const routes: Routes = [
  { path: 'video-management', component: VideoManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
