import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { ITask } from "../models/task";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  tasks$: Observable<ITask[]>;
  loading$: Observable<boolean>;

  constructor(private taskService: TaskService) {
    this.tasks$ = taskService.entities$;
    this.loading$ = taskService.loading$;
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAll();
  }

  markAsDone(task: ITask) {
    task.done = true;
    this.taskService.update(task);
  }

  delete(id: number) {
    this.taskService.delete(id);
  }
}
