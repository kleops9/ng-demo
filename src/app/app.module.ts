import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { NotificationComponent } from "./components/notification/notification.component";
import { NotificationReducer } from "./store/notification/notification.reducer";
import { NotificationEffects } from "./store/notification/notification.effects";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [AppComponent, NotificationComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      notification: NotificationReducer,
    }),
    EffectsModule.forRoot([NotificationEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 200,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
