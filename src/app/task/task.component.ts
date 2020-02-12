import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { ITask } from "../models/task";
import { AppState } from "../models/app-state";
import * as taskActions from "../actions/task.actions";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  tasks$: any; //Observable<ITask[]>;

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(state => state.tasks);
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.store.dispatch(new taskActions.LoadTasksAction());
  }

  markAsDone(id: number) {
    // this.tasks$ = this.tasks$.map(task => {
    //   if (task.id === id) {
    //     task.done = true;
    //   }
    //   return task;
    // });
  }

  delete(id: number) {
    this.store.dispatch(new taskActions.DeleteTaskAction(id));
    // this.taskService.deleteTask(id);
    // this.tasks$ = this.getTasks();
  }
}
