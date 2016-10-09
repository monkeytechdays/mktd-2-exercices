import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { QuestionComponent } from './quizz/question/question.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule.forRoot()
  ],
  declarations: [AppComponent, QuestionComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>' },
    { provide: Storage, useValue: sessionStorage },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
