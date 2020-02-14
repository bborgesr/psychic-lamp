import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { switchMap, map } from "rxjs/operators";

import { TaskService } from "../task.service";
import * as taskActions from "../actions/task.actions";

@Injectable()
export class TaskEffects {
  constructor(private taskService: TaskService, private actions$: Actions) {}

  @Effect() loadTasks$ = this.actions$.pipe(
    ofType(taskActions.LOAD_TASKS),
    switchMap(() =>
      this.taskService
        .getTasks()
        .pipe(map(tasks => new taskActions.LoadTasksSuccessAction(tasks)))
    )
  );

  @Effect() deleteTask$ = this.actions$.pipe(
    ofType(taskActions.DELETE_TASK),
    switchMap((action) =>
      this.taskService
        .deleteTask(action.payload)
        .pipe(map(task => new taskActions.DeleteTaskSuccessAction(task.id)))
    )
  );
}
