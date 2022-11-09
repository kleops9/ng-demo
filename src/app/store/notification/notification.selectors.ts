import { createSelector } from "@ngrx/store";
import { getState } from "src/app/store/store";

export const getNotificationActive = createSelector(
  getState,
  (state) => state.notification.active,
);
export const getNotification = createSelector(
  getState,
  (state) => state.notification.notification,
);
