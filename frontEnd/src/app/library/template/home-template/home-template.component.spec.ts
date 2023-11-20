import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTemplateComponent } from './home-template.component';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeTemplateComponent', () => {
  let component: HomeTemplateComponent;
  let fixture: ComponentFixture<HomeTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTemplateComponent],
      imports: [RouterModule, RouterTestingModule],
      providers: [Router],
    });
    fixture = TestBed.createComponent(HomeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
