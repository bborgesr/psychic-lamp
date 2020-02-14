import { InMemoryDbService } from "angular-in-memory-web-api";
import { ITask as Task } from "./models/task";

export class InMemTaskService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      { id: 1, name: "HTML I", done: true },
      { id: 2, name: "CSS", done: false },
      { id: 3, name: "Responsive design", done: false },
      { id: 4, name: "Git", done: true },
      { id: 5, name: "JavaScript I", done: true },
      { id: 6, name: "JavaScript II", done: false }
    ];

    const task: Task[] = [
      { id: 1, name: "HTML I", done: true },
      { id: 2, name: "CSS", done: false },
      { id: 3, name: "Responsive design", done: false },
      { id: 4, name: "Git", done: true },
      { id: 5, name: "JavaScript I", done: true },
      { id: 6, name: "JavaScript II", done: false }
    ];

    return { tasks, task };
  }
}
