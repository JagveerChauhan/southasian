import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { RecentpostComponent } from '../recentPost/recentpost/recentpost.component';


@NgModule({
  declarations: [
    LayoutComponent,
    RecentpostComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
