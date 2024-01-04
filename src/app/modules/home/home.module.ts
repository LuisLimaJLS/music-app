import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})

export class HomeModule { }
