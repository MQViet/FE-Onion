import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ChannelComponent } from './channel/channel.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SharesModule } from '../shares/shares.module';


@NgModule({
  declarations: [
    ChannelComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharesModule
  ]
})
export class PagesModule { }
