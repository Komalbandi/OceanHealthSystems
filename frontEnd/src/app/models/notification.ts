import { Notifications as NotificationInterface } from '../interfaces';
export class Notification {
  data: NotificationInterface;
  constructor(data: NotificationInterface) {
    this.data = data;
  }

  get Id() {
    return this.data.id;
  }

  get header() {
    return this.data.header;
  }

  get location() {
    return this.data.location;
  }

  get date() {
    return this.data.date;
  }

  get details() {
    return this.data.details;
  }
}
