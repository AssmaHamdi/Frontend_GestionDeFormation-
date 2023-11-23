import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { JoinusComponent } from './joinus/joinus.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AddChapterComponent } from './admin/chapter/add-chapter/add-chapter.component';
import { ListChapterComponent } from './admin/chapter/list-chapter/list-chapter.component';
import { EditChapterComponent } from './admin/chapter/edit-chapter/edit-chapter.component';
import { AddSessionComponent } from './admin/session/add-session/add-session.component';
import { ListSessionComponent } from './admin/session/list-session/list-session.component';
import { EditSessionComponent } from './admin/session/edit-session/edit-session.component';
import { AddCourseComponent } from './admin/course/add-course/add-course.component';
import { ListCourseComponent } from './admin/course/list-course/list-course.component';
import { EditCourseComponent } from './admin/course/edit-course/edit-course.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { AddLabComponent } from './admin/lab/add-lab/add-lab.component';
import { ListLabComponent } from './admin/lab/list-lab/list-lab.component';
import { EditLabComponent } from './admin/lab/edit-lab/edit-lab.component';
import { AddTeamComponent } from './admin/team/add-team/add-team.component';
import { ListTeamComponent } from './admin/team/list-team/list-team.component';
import { EditTeamComponent } from './admin/team/edit-team/edit-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursComponent,
    JoinusComponent,
    AboutComponent,
    AdminComponent,
    AddChapterComponent,
    ListChapterComponent,
    EditChapterComponent,
    AddSessionComponent,
    ListSessionComponent,
    EditSessionComponent,
    AddCourseComponent,
    ListCourseComponent,
    EditCourseComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    AddLabComponent,
    ListLabComponent,
    EditLabComponent,
    AddTeamComponent,
    ListTeamComponent,
    EditTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
