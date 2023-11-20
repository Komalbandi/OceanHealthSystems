import { Notification } from './notification';
import { Notifications as NotificationInterface } from '../interfaces';

describe('Notification', () => {
  const data: NotificationInterface = {
    id: 1,
    header: 'Potential covid infection',
    location: 'Sydney facility',
    date: '03/09/2027 : 11:23:00',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };
  it('should create an instance', () => {
    expect(new Notification(data)).toBeTruthy();
  });

  it('should return the correct values', () => {
    let notification=new Notification(data);
    expect(notification.Id).toEqual(data.id);
    expect(notification.header).toEqual(data.header);
    expect(notification.location).toEqual(data.location);
    expect(notification.date).toEqual(data.date);
    expect(notification.details).toEqual(data.details);
  });
});
