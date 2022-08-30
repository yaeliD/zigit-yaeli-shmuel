import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { Status } from '../../enums/status.enum';
import { project } from '../../models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {

  newProjectForm!: FormGroup;
  status;

  constructor(private _builder: FormBuilder, private projectsService: ProjectsService, private router: Router) {
    this.newProjectForm = this._builder.group({
      name: [{ value: '', disabled: false }, [Validators.required]],
      url: [{ value: '', disabled: false }, [Validators.required]],
      status: [''],
      endTime: [{ value: new Date(), disabled: false }, []],
      img: [{ value: '', disabled: false }, []],
      comment: [{ value: '', disabled: false }, []],
    });
    this.status = this.getStatus();
  }

  getStatus() {
    return [
      { id: 1, value: Status.Active },
      { id: 2, value: Status.Cancelled },
      { id: 3, value: Status.Terminated },
    ];
  }

  onSubmit() {
    const Project: project = {
      name: this.newProjectForm.get('name')?.value ?? '',
      url: this.newProjectForm.get('url')?.value ?? '',
      img: this.newProjectForm.get('img')?.value ?? '',
      status: this.newProjectForm.get('status')?.value ?? Status.Active,
      endTime: this.newProjectForm.get('endTime')?.value ?? new Date(),
    };
    this.projectsService.addProject(Project).subscribe(() => {
      this.navigateToHome();
      this.clearForms()
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  clearForms() {
    this.newProjectForm.controls['name'].setValue('');
    this.newProjectForm.controls['url'].setValue('');
    this.newProjectForm.controls['status'].setValue('');
    this.newProjectForm.controls['endTime'].setValue('');
    this.newProjectForm.controls['img'].setValue('');
  }
}