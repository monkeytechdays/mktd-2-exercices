import { Routes } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { QuizzRoutes } from './quizz/quizz.routes';
import { LeaderBoardRoutes } from './leaderboard/leaderboard.routes';

export const routes: Routes = [
  ...HomeRoutes,
  // TODO Importer les routes des modules Quizz et LeaderBoard
];
