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

  /**
   * This function is not typed
   * @param param1
   * @param param2
   * @returns
   */
  private nonTypedFunction(param1: any, param2: any): any {
    const param = param1.toString() + param2.toString();
    return param.split("@");
  }

  /**
   * This function is typed
   * @param param1 string
   * @param param2 string
   * @returns string[]
   */
  private typedFunction(param1: string, param2: string): string[] {
    const param = param1.toString() + param2.toString();
    return param.split("@");
  }

  /**
   * This function is typed
   */
  private testTypedFunction(): void {
    let a = "a";

    // const result1 = this.typedFunction('test', 'test');
    // const result2 = this.nonTypedFunction("test", "test");
  }
}
