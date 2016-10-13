import { Route } from '@angular/router';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

export const QuizzRoutes: Route[] = [
  { path: 'quizz', component: StartComponent },
  { path: 'quizz/:id/:index', component: QuestionComponent },
  { path: 'quizzResult/:id', component: ResultComponent }
];
