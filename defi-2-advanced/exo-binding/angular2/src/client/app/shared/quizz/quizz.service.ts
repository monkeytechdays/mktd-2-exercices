
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Quizz, QuizzResponses, QuizzResult, Photo, Question } from './quizz.model';

/**
 * This class provides the Quizz service with methods to create and submit quizz.
 */
@Injectable()
export class QuizzService {

  // TODO utiliser Rx pour avoir un élément qui enregistre le dernier userName utilisé
  // userName$: XXX<string>;

  // TODO utiliser Rx pour avoir un élément qui enregistre le dernier quizz utilisé
  // quizz$: XXX<Quizz>;

  /**
   * Handle HTTP error
   */
  private static handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  /**
   * Creates a new QuizzService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(
    private http: Http,
    private storage: Storage) {
    // TODO Initialisation
    //this.userName$ = new ;
    //this.quizz$ = new ;
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  create(name: string): Observable<Quizz> {
    return this.http.get(`api/quizz?userName=${name}`)
      .map((res: Response) => res.json())
      .map(json => {
        const quizz = json as Quizz;
        this.setQuizz(quizz);
        this.setQuizzResponses(quizz.id, new QuizzResponses());
        // TODO Notification du nouveau username et du nouveau Quizz
        return quizz;
      })
      .catch(QuizzService.handleError);
  }

  stopQuizz(): void {
    // TODO notification de la fin du quizz
  }

  getQuestionIndex(id: string): number {
    const resp = this.getQuizzResponses(id);
    return resp.responses.length;
  }

  getQuestion(id: string, index: number): Question {
    return this.getQuizz(id).questions[index];
  }

  getResult(id: string): QuizzResult {
    return this.getQuizzResult(id);
  }

  getPhoto(id: string, index: number): Observable<Photo> {
    return this.http.get(`api/quizz/${id}/${index}`)
      .map((res: Response) => res.json())
      .map(json => json as Photo)
      .catch(QuizzService.handleError);
  }

  addResponse(id: string, response: string): boolean {
    const resp = this.getQuizzResponses(id);
    resp.responses.push(response);
    this.setQuizzResponses(id, resp);
    // continue if there are another questions
    return resp.responses.length !== this.getQuizz(id).questions.length;
  }

  sendResponses(id: string): Observable<QuizzResult> {
    this.stopQuizz();
    return this.http.post(`api/quizz/${id}`, this.getQuizzResponses(id))
      .map((res: Response) => res.json())
      .map(json => this.setQuizzResult(id, json as QuizzResult))
      .catch(QuizzService.handleError);
  }

  private getQuizz(id: string): Quizz {
    return JSON.parse(this.storage.getItem(`quizz-${id}`)) as Quizz;
  }

  private setQuizz(quizz: Quizz) {
    this.storage.setItem(`quizz-${quizz.id}`, JSON.stringify(quizz));
  }

  private getQuizzResponses(id: string): QuizzResponses {
    return JSON.parse(this.storage.getItem(`responses-${id}`)) as QuizzResponses;
  }

  private setQuizzResponses(id: string, quizzResponses: QuizzResponses) {
    this.storage.setItem(`responses-${id}`, JSON.stringify(quizzResponses));
  }
  private getQuizzResult(id: string): QuizzResult {
    return JSON.parse(this.storage.getItem(`result-${id}`)) as QuizzResult;
  }

  private setQuizzResult(id: string, quizzResult: QuizzResult) {
    this.storage.setItem(`result-${id}`, JSON.stringify(quizzResult));
  }
}

