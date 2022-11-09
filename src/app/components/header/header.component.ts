import { Component, Input, OnInit } from "@angular/core";
import { filter, Observable, of } from "rxjs";
import { NotificationFacade } from "src/app/fascades/notification.facade";
import { Notification } from "src/app/models/notification.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "demo";

  notificationActive$: Observable<boolean> = of(false);
  notification$: Observable<Notification | null> = of(null);

  constructor(private notificationFacade: NotificationFacade) {}

  ngOnInit(): void {
    this.notificationActive$ = this.notificationFacade.notificationActive$;
    this.notification$ = this.notificationFacade.notification$;
  }

  sendNotificationException(): void {
    this.notificationActive$
      .pipe(filter((active) => !active))
      .subscribe(() => {
        this.notificationFacade.setNotification({
          duration: 3000,
          message: "This is an error message",
          type: "error",
        });
      })
      .unsubscribe();
  }
}
