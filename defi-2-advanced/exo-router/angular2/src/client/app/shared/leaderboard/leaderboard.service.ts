import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { QuizzResult } from '../quizz/quizz.model';

/**
 * This class provides the LeaderBoard service with methods to get leaderboard.
 */
@Injectable()
export class LeaderBoardService {

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
  constructor(private http: Http) {
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {QuizzResult[]} The Observable for the HTTP request.
   */
  get(): Observable<QuizzResult[]> {
    return this.http.get(`api/leaderboard`)
      .map((res: Response) => res.json())
      .map(json => json as QuizzResult[])
      .catch(LeaderBoardService.handleError);
  }
}

