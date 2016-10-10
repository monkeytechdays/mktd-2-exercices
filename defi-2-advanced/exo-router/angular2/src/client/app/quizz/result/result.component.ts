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
    private route: ActivatedRoute, // la route active
    private router: Router, // le routeur
    private quizzService: QuizzService) { }

  /**
   * Initialise component
   */
  ngOnInit() {
    const initQuizz = (id:string) => {
      this.quizzId = id;
      this.result = this.quizzService.getResult(this.quizzId);
    };
    // TODO récupérer le paramètre du chemin, et utiliser la fonction initQuizz
  }

  playAgain(): boolean {
    this.quizzService.create(this.result.userName)
      .subscribe(quizz => this.router /* TODO aller sur la première question du nouveau quizz */);
    return false;
  }
}
