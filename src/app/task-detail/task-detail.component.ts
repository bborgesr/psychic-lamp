import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { TaskService } from "../task.service";
import { ITask } from "../models/task";

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: ["./task-detail.component.css"]
})
export class TaskDetailComponent implements OnInit {
  id: number;
  task$: Observable<ITask>;
  loading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
    this.loading$ = taskService.loading$;
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.task$ = this.getTask();
  }

  getTask(): Observable<ITask> {
    return this.taskService.getByKey(this.id);
  }
}
