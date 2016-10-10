import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import {LeaderBoardComponent} from './leaderboard.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [LeaderBoardComponent],
  exports: [LeaderBoardComponent],
  providers: []
})
export class LeaderBoardModule { }
