import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { Notification } from "src/app/models/notification.interface";
import {
  appendNotification,
  getNotification,
  getNotificationActive,
} from "src/app/store/notification";
import { State } from "../store/store";

@Injectable({ providedIn: "root" })
export class NotificationFacade {
  notification$ = this.store.pipe(select(getNotification));
  notificationActive$ = this.store.pipe(select(getNotificationActive));

  constructor(private store: Store<State>) {}

  setNotification(notification: Notification): void {
    this.store.dispatch(appendNotification({ notification }));
  }
}
