import { createFeatureSelector } from '@ngrx/store';

export const selectProjects = createFeatureSelector<any[]>('myProjects');