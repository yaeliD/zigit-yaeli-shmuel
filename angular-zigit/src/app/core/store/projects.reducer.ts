import { createReducer, on } from "@ngrx/store";
import { projectsFetchAPISuccess } from './projects.action';

export const initialState: ReadonlyArray<any> = [];

export const projectsReducer = createReducer(
  initialState,
  on(projectsFetchAPISuccess, (state: any, { allProjects }: any) => {
    return allProjects;
  })
);
