import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NotificationComponent } from "./notification.component";

describe("Notification Component", () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
