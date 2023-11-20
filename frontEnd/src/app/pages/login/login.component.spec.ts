import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [FormBuilder],
      imports: [
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test LoginForm', () => {
    it('User name is required', () => {
      let val = {
        userName: '',
        userPassword: 'abc123',
      };
      component.loginForm.setValue(val);
      expect(component.loginForm.status).toEqual('INVALID');
    });

    it('User password is required',()=>{
      let val = {
        userName: 'Admin',
        userPassword: '',
      };
      component.loginForm.setValue(val);
      expect(component.loginForm.status).toEqual('INVALID');
    });

    it('Form is valid',()=>{
      let val = {
        userName: 'Admin',
        userPassword: 'abc123',
      };
      component.loginForm.setValue(val);
      expect(component.loginForm.status).toEqual('VALID');
    });
  });
});
