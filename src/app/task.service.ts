import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { ITask as Task } from "./models/task";

@Injectable({ providedIn: "root" })
export class TaskService extends EntityCollectionServiceBase<Task> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Task", serviceElementsFactory);
  }
}
