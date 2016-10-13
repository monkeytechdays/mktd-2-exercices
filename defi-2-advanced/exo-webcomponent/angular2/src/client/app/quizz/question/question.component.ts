import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { QuizzService, Photo, Question } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'mktd-question',
  templateUrl: 'question.component.html',
  styleUrls: ['question.component.css'],
})
export class QuestionComponent implements OnInit {

  photo: Photo;
  response: string = null;
  question: Question;
  private quizzId: string;
  private index: number;

  /**
   * Creates an instance of the QuestionComponent with the injected ActivatedRoute, Router, QuizzService.
   *
   * @param {ActivatedRoute} route - The current activated route.
   * @param {Router} router - The injected Router.
   * @param {QuizzService} quizzService - The injected QuizzService.
   */
  constructor(private route: ActivatedRoute,
    private router: Router,
    private quizzService: QuizzService) {
  }

  /**
   * Initialise component
   */
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      // get current route path parameters
      this.quizzId = params['id'];
      this.index = +params['index']; // (+) converts string 'index' to a number
      this.response = null;

      // Load Photo
      this.quizzService.getPhoto(this.quizzId, this.index)
        .subscribe(photo => this.photo = photo);

      // Load Question
      this.question = this.quizzService.getQuestion(this.quizzId, this.index);
    });
  }

  /**
   * Answer to this question
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  next(): boolean {
    const hasNext = this.quizzService.addResponse(this.quizzId, this.response);
    if (hasNext) {
      const next = this.quizzService.getQuestionIndex(this.quizzId);
      this.router.navigate(['/quizz', this.quizzId, next]);
    } else {
      this.quizzService.sendResponses(this.quizzId)
        .subscribe(result => this.router.navigate(['/quizzResult', this.quizzId]));
    }
    return false;
  }
}
