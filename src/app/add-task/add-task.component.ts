import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { TaskService } from "../task.service";
import { ITask } from "../models/task";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"]
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup;
  private task: FormControl;
  private done: FormControl;

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit() {
    this.task = new FormControl("", [Validators.required]);
    this.done = new FormControl(false);

    this.addTaskForm = new FormGroup({
      task: this.task,
      done: this.done
    });
  }

  onSubmit(form: FormGroup) {
    const task: ITask = {
      id: null,
      name: form.value.task,
      done: form.value.done
    };
    this.taskService.add(task);
    this.router.navigate([""]);
  }

  validateTask() {
    return this.task.valid || this.task.untouched;
  }
}
