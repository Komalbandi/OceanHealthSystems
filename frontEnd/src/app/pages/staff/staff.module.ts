import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { StaffRoutingModule } from './staff-routing.module';
import { HomeTemplateModule } from '../../library/template/home-template/home-template.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    HomeTemplateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class StaffModule {}
