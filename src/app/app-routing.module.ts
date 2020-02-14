import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";

const routes: Routes = [
  { path: "", component: TaskComponent },
  { path: "task/new", component: AddTaskComponent },
  { path: "task/:id", component: TaskDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
