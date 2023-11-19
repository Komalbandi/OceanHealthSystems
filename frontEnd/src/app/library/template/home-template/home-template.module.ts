import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template.component';

@NgModule({
  declarations: [HomeTemplateComponent],
  imports: [CommonModule],
  exports: [HomeTemplateComponent],
})
export class HomeTemplateModule {}
