import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { TaskService } from "./task.service";
import { taskReducer } from "./reducers/task.reducer";
import { TaskEffects } from "./effects/task.effects";

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
    StoreModule.forRoot({ tasks: taskReducer }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TaskEffects]),
    StoreDevtoolsModule.instrument({
      name: "APM Demo App DevTools",
      maxAge: 25
    })
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
