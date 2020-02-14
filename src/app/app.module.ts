import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { TaskService } from "./task.service";
import { AppStoreModule } from "./store/app-store.module";
import { InMemTaskService } from "./inMemTaskService";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: "APM Demo App DevTools",
      maxAge: 25
    }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemTaskService),
    AppStoreModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
