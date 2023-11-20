import { Component } from '@angular/core';
import { ServerService } from './common/server.service';
import { Notifications as NotificationsInterface } from '../../interfaces/notifications';
import { first } from 'rxjs';
import { Notifications as NotificationCollection } from '../../models/collection/notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  notificationDatas?: NotificationCollection;
  constructor(public serverService: ServerService) {
    this.getNotifications();
  }

  getNotifications() {
    this.serverService
      .getNotification()
      .pipe(first())
      .subscribe({
        next: (datas: NotificationsInterface[]) => {
          this.notificationDatas = new NotificationCollection(datas);
        },
      });
  }
}
