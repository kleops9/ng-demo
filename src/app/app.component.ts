import { Component, OnInit } from "@angular/core";
import { debounceTime, filter, Observable, of } from "rxjs";
import { NotificationFacade } from "./fascades/notification.facade";
import { Notification } from "./models/notification.interface";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "demo";
  typedText$: Observable<string> = of("");

  notificationActive$: Observable<boolean> = of(false);
  notification$: Observable<Notification | null> = of(null);

  debounceForm = new FormGroup({
    debounceInput: new FormControl(),
  });

  constructor(private notificationFacade: NotificationFacade) {}

  ngOnInit(): void {
    this.notificationActive$ = this.notificationFacade.notificationActive$;
    this.notification$ = this.notificationFacade.notification$;
    this.typedText$ =
      this.debounceForm.get("debounceInput")?.valueChanges.pipe(
        debounceTime(500),
        filter((value) => value?.length > 2),
      ) || of("");
  }

  sendNotificationSuccess(): void {
    this.notificationActive$
      .pipe(filter((active) => !active))
      .subscribe(() => {
        this.notificationFacade.setNotification({
          duration: 3000,
          message: "This is a success message",
          type: "success",
        });
      })
      .unsubscribe();
  }
}
