/**
 * This barrel file provides the exports for the shared resources (services, components, models).
 */
// Configuration
export { Config } from './config/env.config';

// Models
export * from './quizz/quizz.model';

// Shared services
export { LeaderBoardService } from './leaderboard/leaderboard.service';
export { QuizzService } from './quizz/quizz.service';

// Components
export { ToolbarComponent } from './toolbar/toolbar.component';
export { QuizzResultComponent } from './quizz-result/quizz-result.component';

// Pipe
export { TimePipe } from './time/time.pipe';
