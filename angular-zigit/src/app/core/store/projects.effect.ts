import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { ProjectsService } from '../services/projects.service';
import { projectsFetchAPISuccess, invokeProjectsAPI } from './projects.action';
import { selectProjects } from './projects.selector';

@Injectable()

export class ProjectsEffect {
  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store
  ) { }

  loadAllProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeProjectsAPI),
      withLatestFrom(this.store.pipe(select(selectProjects))),
      mergeMap(([, bookformStore]) => {
        if (bookformStore.length > 0) {
          return EMPTY;
        }
        return this.projectsService.getAllProjects().pipe(map((data) => projectsFetchAPISuccess({ allProjects: data })));
      })
    )
  );
}