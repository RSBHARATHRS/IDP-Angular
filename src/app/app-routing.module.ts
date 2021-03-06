import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';
import { IeltsComponent } from './ielts/ielts.component';
import { IeltschildComponent } from './ielts/ieltschild/ieltschild.component';
import { MainImageContainerComponent } from './main-image-container/main-image-container.component';
import { RegisterComponent } from './register/register.component';
import { StudentStoriesComponent } from './student-stories/student-stories.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {
    path:"form",
    component:FormComponent
  },
  {
    path:"",
    component:MainImageContainerComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"home",
    component:MainImageContainerComponent
  },
  {
    path:"students",
    component:StudentComponent
  },

  {
    path:"ielts",
    children:[
      {
        path :"universities",
        component:IeltsComponent,
      },
      {
        path :"student reviews",
        component:StudentStoriesComponent,
      }
    ]
  },
  {
    path:"articles",
    component:ArticlesComponent
  },
  {
    path:"**",
    component:ErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
