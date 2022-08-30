import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { invokeProjectsAPI } from 'src/app/core/store/projects.action';
import { Status } from '../../enums/status.enum';
import { project } from '../../models/project.model';
import { selectProjects } from '../../../core/store/projects.selector';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  ELEMENT_DATA!: project[];
  displayedColumns: string[] = ['name', 'url', 'status', 'comment', 'img', 'endTime'];
  projects$!: Subscription;
  projectsStor$: any;

  constructor(private store: Store) { }

  ngOnDestroy(): void {
    this.projects$.unsubscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(invokeProjectsAPI());
    this.projectsStor$ = this.store.pipe(select(selectProjects));
    this.projects$ = this.projectsStor$.subscribe((res: any) => {
      this.ELEMENT_DATA = res.projects;
    });

  }
}