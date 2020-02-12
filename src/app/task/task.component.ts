import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";
import { ITask } from "../task.model";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  tasks: ITask[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  markAsDone(id) {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        task.done = true;
      }
      return task;
    });
  }

  delete(id) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
