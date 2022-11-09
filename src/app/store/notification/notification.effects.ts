import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { delay, map, switchMap } from "rxjs/operators";

import {
  appendNotification,
  hideNotification,
  showNotification,
} from "./notification.actions";

@Injectable()
export class NotificationEffects {
  constructor(private actions$: Actions) {}

  appendNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appendNotification),
      map((action) => action.payload.notification),
      map((notification) => showNotification({ notification })),
    ),
  );

  showNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showNotification),
      map((action) => action.payload.notification),
      switchMap((notification) =>
        of(notification).pipe(delay(notification.duration)),
      ),
      map(hideNotification),
    ),
  );
}
