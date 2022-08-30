import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { project } from '../../models/project.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() isComment: boolean = true;
  @Input() displayedColumns!: string[] ;
  @Input() set ELEMENT_DATA(value: project[]) {
    this.dataSource = new MatTableDataSource<project>(value);
  }
  dataSource: any;
  currentProject!:project;
  isAddComment: boolean = false;
  isOpenComment: boolean = false;

  constructor() { }
  
  addComment(element: project){
    this.isAddComment = true;
    this.currentProject = element;
  }

  openComment(element: project){
    this.isOpenComment = true;
    this.currentProject = element;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
