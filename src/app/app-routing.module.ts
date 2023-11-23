import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { AddChapterComponent } from './admin/chapter/add-chapter/add-chapter.component';
import { EditChapterComponent } from './admin/chapter/edit-chapter/edit-chapter.component';
import { ListChapterComponent } from './admin/chapter/list-chapter/list-chapter.component';
import { AddCourseComponent } from './admin/course/add-course/add-course.component';
import { EditCourseComponent } from './admin/course/edit-course/edit-course.component';
import { ListCourseComponent } from './admin/course/list-course/list-course.component';
import { AddLabComponent } from './admin/lab/add-lab/add-lab.component';
import { EditLabComponent } from './admin/lab/edit-lab/edit-lab.component';
import { ListLabComponent } from './admin/lab/list-lab/list-lab.component';
import { AddSessionComponent } from './admin/session/add-session/add-session.component';
import { EditSessionComponent } from './admin/session/edit-session/edit-session.component';
import { ListSessionComponent } from './admin/session/list-session/list-session.component';
import { AddTeamComponent } from './admin/team/add-team/add-team.component';
import { EditTeamComponent } from './admin/team/edit-team/edit-team.component';
import { ListTeamComponent } from './admin/team/list-team/list-team.component';
import { CoursComponent } from './cours/cours.component';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"joinus",component:JoinusComponent},
  {path:"cours",component:CoursComponent},
  {path:"admin",component:AdminComponent},
  {path:"session-add",component:AddSessionComponent},
  {path:"session-edit",component:EditSessionComponent},
  {path:"session-list",component:ListSessionComponent},
  {path:"lab-add",component:AddLabComponent},
  {path:"lab-edit",component:EditLabComponent},
  {path:"lab-list",component:ListLabComponent},
  {path:"category-add",component:AddCategoryComponent},
  {path:"category-edit",component:EditCategoryComponent},
  {path:"category-list",component:ListCategoryComponent},
  {path:"course-add",component:AddCourseComponent},
  {path:"course-edit",component:EditCourseComponent},
  {path:"course-list",component:ListCourseComponent},
  {path:"chapter-add",component:AddChapterComponent},
  {path:"chapter-edit",component:EditChapterComponent},
  {path:"chapter-list",component:ListChapterComponent},
  {path:"team-add",component:AddTeamComponent},
  {path:"team-edit",component:EditTeamComponent},
  {path:"team-list",component:ListTeamComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
