/**
 * This barrel file provides the exports for the shared Ressources (services, components, models).
 */
// Configuration
export { Config } from './config/env.config';

// Models
export * from './quizz/quizz.model';

// Shared services
export { QuizzService } from './quizz/quizz.service';

// Components
export { ToolbarComponent } from './toolbar/toolbar.component';
