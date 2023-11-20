import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ServerService } from './common/server.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeTemplateModule } from '../../library/template/home-template/home-template.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Notifications as NotificationInterface } from '../../interfaces';
import { GetService } from '../../providers/serverFacade/get/get.service';
import { ErrorService } from '../../providers/serverFacade/error/error.service';
import { Observable, from } from 'rxjs';

describe('HomeComponent', () => {
  const datas: NotificationInterface[] = [
    {
      id: 1,
      header: 'Potential covid infection',
      location: 'Sydney facility',
      date: '03/09/2027 : 11:23:00',
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  let fixture: ComponentFixture<HomeComponent>;
  let serverService: ServerService;
  let component: HomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [ServerService],
      imports: [HttpClientModule, HomeTemplateModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test getNotifications', () => {
    spyOn<ServerService, any>(
      component.serverService,
      'getNotification'
    ).and.returnValue(from([datas]));
    component.getNotifications();
    expect(component.notificationDatas?.all[0].Id).toEqual(datas[0].id);
    expect(component.notificationDatas?.all[0].header).toEqual(datas[0].header);
    expect(component.notificationDatas?.all[0].location).toEqual(
      datas[0].location
    );
    expect(component.notificationDatas?.all[0].date).toEqual(datas[0].date);
    expect(component.notificationDatas?.all[0].details).toEqual(
      datas[0].details
    );
  });
});
