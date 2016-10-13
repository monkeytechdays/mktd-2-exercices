import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [StartComponent, QuestionComponent, ResultComponent],
  exports: [StartComponent, QuestionComponent, ResultComponent],
  providers: []
})
export class QuizzModule { }
