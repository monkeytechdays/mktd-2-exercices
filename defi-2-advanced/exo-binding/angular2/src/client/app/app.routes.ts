import { Routes } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { QuizzRoutes } from './quizz/quizz.routes';
import { LeaderBoardRoutes } from './leaderboard/leaderboard.routes';

export const routes: Routes = [
  ...HomeRoutes,
  ...QuizzRoutes,
  ...LeaderBoardRoutes
];
