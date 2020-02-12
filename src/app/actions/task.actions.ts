import { ITask } from "../models/task";

export const LOAD_TASKS = "LOAD_TASKS";
export const LOAD_TASKS_SUCCESS = "LOAD_TASKS_SUCCESS";
export const DELETE_TASK = "DELETE_TASK";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";

export class LoadTasksAction {
  readonly type = LOAD_TASKS;
  constructor() {}
}

export class LoadTasksSuccessAction {
  readonly type = LOAD_TASKS_SUCCESS;
  constructor(public payload: ITask[]) {}
}

export class DeleteTaskAction {
  readonly type = DELETE_TASK;
  constructor(public payload: number) {}
}

export class DeleteTaskSuccessAction {
  readonly type = DELETE_TASK_SUCCESS;
  constructor(public payload: number) {}
}

export type Action =
  | LoadTasksAction
  | LoadTasksSuccessAction
  | DeleteTaskAction
  | DeleteTaskSuccessAction;
