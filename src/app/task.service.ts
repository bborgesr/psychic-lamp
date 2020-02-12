import { Injectable } from "@angular/core";
import { ITask } from "./task.model";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  tasks: ITask[];

  constructor() {
    this.tasks = [
      { id: 1, name: "HTML I", done: true },
      { id: 2, name: "CSS", done: false },
      { id: 3, name: "Responsive design", done: false },
      { id: 4, name: "Git", done: true },
      { id: 5, name: "JavaScript I", done: true },
      { id: 6, name: "JavaScript II", done: false }
    ];
  }

  getTasks(): ITask[] {
    return this.tasks;
  }

  addTask(task: ITask) {
    this.tasks = [...this.tasks, task];
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getNewId(): number {
    const maxId = this.tasks.reduce((acc, val) => {
      return Math.max(acc, val.id);
    }, 0);
    return maxId + 1;
  }
}
