import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";

const routes: Routes = [
  { path: "", component: TaskComponent },
  { path: "task/new", component: AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
