import {isMetadataSymbolicIndexExpression} from '@angular/tsc-wrapped';
import {indexDebugNode} from '@angular/core/src/debug/debug_node';
import {identifierToken} from '@angular/compiler/src/identifiers';
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
  constructor(private route: ActivatedRoute, // la route active
    private router: Router, // le router
    private quizzService: QuizzService) {
  }

  /**
   * Initialise component
   */
  ngOnInit() {
    const initialize = (id:string, index :number) => {
      this.quizzId = id;
      this.index = index;
      this.response = null;
      // Load Photo
      this.quizzService.getPhoto(this.quizzId, this.index)
        .subscribe(photo => this.photo = photo);

      // Load Question
      this.question = this.quizzService.getQuestion(this.quizzId, this.index);
    };

    // TODO récupérer les paramètres de la route active, et utilisez la fonction initialize
  }

  /**
   * Answer to this question
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  next(): boolean {
    const hasNext = this.quizzService.addResponse(this.quizzId, this.response);
    if (hasNext) {
      const next = this.quizzService.getQuestionIndex(this.quizzId);
      // TODO naviguer vers la question suivante
    } else {
      this.quizzService.sendResponses(this.quizzId)
        .subscribe(result => this.router /* TODO naviguer vers le résultat */);
    }
    return false;
  }
}
