import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentService } from 'src/app/core/services/comment.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @ViewChild('dialogComments') dialogComments!: TemplateRef<any>;
  @Output() isOpenComment: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() set project(value: any) {
    this.currentProject = value;
    this.comments = [];
    this.commentService.getCommentByProjectId(value._id).subscribe((comments: any) => {
      console.log('comments');
      this.comments = comments.comments;
      this.openDialog();
    })
  }
  currentProject: any;
  comments!: Comment[];
  styleDialog = {
    background: '#f3f2f2',
    width: ' 430px',
    position: {
      left: '25px',
      bottom: '0px',
      top: '30px',
    },
  };
  constructor(public _dialog: MatDialog, private commentService: CommentService) { }

  openDialog() {
    const dialogRef = this._dialog.open(this.dialogComments, this.styleDialog);

    dialogRef.afterClosed().subscribe(() => {
      this.isOpenComment.emit(false);
    });
  }
}
