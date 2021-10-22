import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';
import { IeltsComponent } from './ielts/ielts.component';
import { MainImageContainerComponent } from './main-image-container/main-image-container.component';
import { RegisterComponent } from './register/register.component';
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
    component:IeltsComponent
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
