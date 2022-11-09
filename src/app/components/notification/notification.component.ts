import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { Notification } from "src/app/models/notification.interface";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  @Input() notification: Notification | null = null;
}
