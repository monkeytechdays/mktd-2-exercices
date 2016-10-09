import { Component, OnInit } from '@angular/core';
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
   * Creates an instance of the QuestionComponent with the injected QuizzService.
   *
   * @param {QuizzService} quizzService - The injected QuizzService.
   */
  constructor(private quizzService: QuizzService) {
    this.quizzId = 'quizz-templating';
    this.index = 0;
  }

  /**
   * Initialise component
   */
  ngOnInit() {
    this.load();
  }

  /**
   * Answer to this question
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  next(): boolean {
    const hasNext = this.quizzService.addResponse(this.quizzId, this.response);
    if (hasNext) {
      const next = this.quizzService.getQuestionIndex(this.quizzId);
      this.index = next;
      this.load();
    } else {
      // On est dans une version 'dégradé' de l'application, ça de doit pas arrivé
    }
    return false;
  }

  private load() {
    // Load Photo
    this.quizzService.getPhoto(this.quizzId, this.index)
      .subscribe(photo => this.photo = photo);

    // Load Question
    this.question = this.quizzService.getQuestion(this.quizzId, this.index);
  }
}
