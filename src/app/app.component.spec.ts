import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { provideMockStore } from "@ngrx/store/testing";
import { MatDivider } from "@angular/material/divider";
import { MatFormField, MatLabel } from "@angular/material/form-field";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        MatDivider,
        MatLabel,
        MatFormField,
      ],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("demo");
  });
});
