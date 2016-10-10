import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzService } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'mktd-start',
  templateUrl: 'start.component.html',
  styleUrls: ['start.component.css'],
})

export class StartComponent {
  name: string = '';

  /**
   * Creates an instance of the StartComponent with the injected Router, QuizzService.
   *
   * @param {Router} router - le Router Angular injecté
   * @param {QuizzService} quizzService - le service QuizzService injecté.
   */
  constructor(
    private router: Router,
    private quizzService: QuizzService) {
    console.log('Create StartComponent');
  }

  /**
   * Create and start new Quizz
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  start(): boolean {
    this.quizzService.create(this.name)
      .subscribe(quizz => this.router /* TODO utiliser le router pour aller sur la première question du quizz */);
    return false;
  }
}
