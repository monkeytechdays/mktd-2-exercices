import { Component, OnInit } from '@angular/core';
import { LeaderBoardService, QuizzResult } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'mktd-leaderboard',
  templateUrl: 'leaderboard.component.html',
  styleUrls: ['leaderboard.component.css'],
})
export class LeaderBoardComponent implements OnInit {
  results: QuizzResult[];

  constructor(private leaderboardService: LeaderBoardService) {
  }

  ngOnInit() {
    this.leaderboardService.get()
      .subscribe(results => this.results = results);
  }
}
