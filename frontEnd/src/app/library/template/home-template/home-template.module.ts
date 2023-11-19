import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomeTemplateComponent],
  imports: [CommonModule,RouterModule],
  exports: [HomeTemplateComponent],
})
export class HomeTemplateModule {}
