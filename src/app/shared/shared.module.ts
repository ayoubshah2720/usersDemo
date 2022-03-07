import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { ListUserComponent } from '../home/list-user/list-user.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ListUserComponent
  ]
})
export class SharedModule { }
