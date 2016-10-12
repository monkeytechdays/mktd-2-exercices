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
   * @param {Router} router - The Angular Router
   * @param {QuizzService} quizzService - The injected QuizzService.
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
      .subscribe(quizz => this.router.navigate(['/quizz', quizz.id, 0]));
    return false;
  }
}
