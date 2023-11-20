import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffComponent } from './staff.component';
import { FormBuilder } from '@angular/forms';
import { ServerService } from './common/server.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeTemplateModule } from '../../library/template/home-template/home-template.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchVaccineInterface } from '../../interfaces';
import { from, pipe, first } from 'rxjs';

describe('StaffComponent', () => {
  let component: StaffComponent;
  let fixture: ComponentFixture<StaffComponent>;
  let datas = [
    {
      id: 1,
      header: 'Covid vaccine',
      details:
        "For covid, active for two years, no known adverse interactions with diabetes, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

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

  it('getVaccine', () => {
    spyOn<ServerService, any>(
      component.serverService,
      'getVaccine'
    ).and.returnValue(from([datas]));

    component.searchVaccineForm.setValue({
      vaccineSearchText: 'covid vaccine',
    });

    component.getVaccine(component.searchVaccineForm.value);

    expect(component.searchVaccineResult?.all[0].Id).toEqual(datas[0].id);
    expect(component.searchVaccineResult?.all[0].header).toEqual(
      datas[0].header
    );
    expect(component.searchVaccineResult?.all[0].details).toEqual(
      datas[0].details
    );
  });
});
