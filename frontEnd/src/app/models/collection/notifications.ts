import { Notification } from '../notification';
import { Notifications as NotificationInterface } from '../../interfaces';
export class Notifications {
  datas: Notification[] = [];

  constructor(datas: NotificationInterface[]) {
    datas.forEach((data: NotificationInterface) => {
      this.datas.push(new Notification(data));
    });
  }

  get all() {
    return this.datas;
  }
}
