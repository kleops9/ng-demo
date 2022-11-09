import { createReducer, on } from "@ngrx/store";

import { Notification } from "src/app/models/notification.interface";

import {
  appendNotification,
  hideNotification,
  showNotification,
} from "./notification.actions";

export interface NotificationState {
  active: boolean;
  notification: Notification | null;
}

export const initialState: NotificationState = {
  active: false,
  notification: null,
};

export const NotificationReducer = createReducer(
  initialState,
  on(appendNotification, (state: NotificationState, action) => ({
    ...state,
    active: false,
    notification: action.payload.notification,
  })),
  on(showNotification, (state: NotificationState) => ({
    ...state,
    active: true,
  })),
  on(hideNotification, (state: NotificationState) => ({
    ...state,
    active: false,
    notification: null,
  })),
);
