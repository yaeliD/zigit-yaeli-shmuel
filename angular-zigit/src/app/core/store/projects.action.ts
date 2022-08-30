import { createAction, props } from '@ngrx/store';

export const invokeProjectsAPI = createAction(
  '[Projects API] Invoke Projects Fetch API'
);

export const projectsFetchAPISuccess = createAction(
  '[Projects API] Fetch API Success',
  props<{ allProjects: any }>()
);

