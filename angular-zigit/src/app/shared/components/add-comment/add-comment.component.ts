import { AfterViewInit, Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommentService } from 'src/app/core/services/comment.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements AfterViewInit {

  @ViewChild('dialogAddComment') dialogAddComment!: TemplateRef<any>;
  @Output() isAddComment: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() project!: any;

  styleDialog = {
    background: '#f3f2f2',
    width: ' 430px',
    height: '500px',
    position: {
      left: '25px',
      bottom: '22px',
      top: '30px',
    },
  };

  public newCommentForm = this._builder.group({
    text: [{ value: '', disabled: false }, [Validators.required]],
    time: [{ value: new Date(), disabled: false }, [Validators.required]],
    img: [{ value: '', disabled: false }, []],
  });

  constructor(public _dialog: MatDialog, private _builder: FormBuilder, private commentService: CommentService) { }

  ngAfterViewInit(): void {
    this.openDialog()
  }

  openDialog() {
    const dialogRef = this._dialog.open(this.dialogAddComment, this.styleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.isAddComment.emit(false);
      if (result) {
        this.onSubmit();
      }
    });
  }

  onSubmit() {
    const comment: Comment = {
      projectId: this.project._id,
      text: this.newCommentForm.get('text')?.value ?? '',
      img: this.newCommentForm.get('img')?.value ?? '',
      time: new Date(),
    };
    this.commentService.addCommentToProject(comment).subscribe()
  }
}