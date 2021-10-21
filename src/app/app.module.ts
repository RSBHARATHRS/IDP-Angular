import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainImageContainerComponent } from './main-image-container/main-image-container.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { StudentStoriesComponent } from './student-stories/student-stories.component';
import { StudentComponent } from './student/student.component';
import { IeltsComponent } from './ielts/ielts.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainImageContainerComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    FormComponent,
    StudentStoriesComponent,
    StudentComponent,
    IeltsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
