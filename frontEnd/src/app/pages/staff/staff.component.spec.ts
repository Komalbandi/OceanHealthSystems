import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffComponent } from './staff.component';
import { FormBuilder } from '@angular/forms';
import { ServerService } from './common/server.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeTemplateModule } from '../../library/template/home-template/home-template.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('StaffComponent', () => {
  let component: StaffComponent;
  let fixture: ComponentFixture<StaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffComponent],
      providers: [FormBuilder, ServerService],
      imports: [
        RouterModule,
        HttpClientModule,
        HomeTemplateModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(StaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
