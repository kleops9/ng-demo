import { createAction } from "@ngrx/store";

import { Notification } from "../../models/notification.interface";

function payload<P>() {
  return (args: P) => ({ payload: { ...args } });
}

export const appendNotification = createAction(
  "[Notification] Append Notification",
  payload<{ notification: Notification }>(),
);

export const showNotification = createAction(
  "[Notification] Show Notification",
  payload<{ notification: Notification }>(),
);

export const hideNotification = createAction(
  "[Notification] Hide Notification",
);
