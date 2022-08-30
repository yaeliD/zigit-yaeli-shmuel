import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TableComponent } from './shared/components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './shared/components/search/search.component';
import { AddProjectComponent } from './shared/components/add-project/add-project.component';
import { HomeComponent } from './pages/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './core/interceptors/headers.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCommentComponent } from './shared/components/add-comment/add-comment.component';
import { MatButtonModule } from '@angular/material/button';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffect } from './core/store/projects.effect';
import { projectsReducer } from './core/store/projects.reducer';
import { MatSelectModule } from '@angular/material/select';
import { CommentComponent } from './shared/components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    SearchComponent,
    AddProjectComponent,
    HomeComponent,
    AddCommentComponent,
    ProjectsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('myProjects', projectsReducer),
    EffectsModule.forRoot([ProjectsEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
