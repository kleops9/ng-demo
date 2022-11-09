import { Selector } from "@ngrx/store";
import { NotificationState } from "src/app/store/notification/notification.reducer";

export interface State {
  notification: NotificationState;
}

export const getState: Selector<State, State> = (state) => state;
