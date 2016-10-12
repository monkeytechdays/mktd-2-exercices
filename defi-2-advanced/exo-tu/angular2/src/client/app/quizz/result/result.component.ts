import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { QuizzService, QuizzResult } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'mktd-result',
  templateUrl: 'result.component.html',
  styleUrls: ['result.component.css'],
})
export class ResultComponent implements OnInit {

  result: QuizzResult;
  private quizzId: string;

  /**
   * Creates an instance of the ResultComponent with the injected Router, QuizzService.
   *
   * @param {ActivatedRoute} route - The current activated route.
   * @param {Router} router - The injected Router.
   * @param {QuizzService} quizzService - The injected QuizzService.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizzService: QuizzService) { }

  /**
   * Initialise component
   */
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      // get current route path parameter
      this.quizzId = params['id'];

      // get result
      this.result = this.quizzService.getResult(this.quizzId);
    });
  }

  playAgain(): boolean {
    this.quizzService.create(this.result.userName)
      .subscribe(quizz => this.router.navigate(['/quizz', quizz.id, 0]));
    return false;
  }
}
