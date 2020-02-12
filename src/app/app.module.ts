import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./task/task.component";
import { TaskService } from "./task.service";
import { AddTaskComponent } from "./add-task/add-task.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
