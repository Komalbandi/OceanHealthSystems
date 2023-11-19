import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss'],
})
export class HomeTemplateComponent {
  constructor(public router: Router) {
    console.log(router.url);
  }
}
