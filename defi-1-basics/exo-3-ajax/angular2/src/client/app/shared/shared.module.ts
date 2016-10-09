import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuizzService } from './quizz/quizz.service';
import { ToolbarComponent } from './toolbar/toolbar.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [CommonModule, ],
  declarations: [ToolbarComponent],
  exports: [
    ToolbarComponent,
    CommonModule, FormsModule]
})
export class SharedModule {
  // Module disponible en LazyLoad
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [QuizzService]
    };
  }
}
