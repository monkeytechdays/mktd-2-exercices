import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Photo, Question } from './quizz.model';

/**
 * This class provides the Quizz service with methods to create and submit quizz.
 */
@Injectable()
export class QuizzService {

  quizzMap: Map<string, number>;
  private data = ['Gorille', 'Chimpanzé', 'Orang-outang', 'Ouistiti'];

  constructor() {
    this.quizzMap = new Map<string, number>();
  }

  getQuestionIndex(id: string): number {
    console.log(`getQuestionIndex(${id})`);
    return this.quizzMap.has(id) ? this.quizzMap.get(id) : 0;
  }

  getQuestion(id: string, index: number): Question {
    console.log(`getQuestion(${id}, ${index})`);
    this.shuffle();
    var question: Question = { responses: this.data };
    return question;
  }

  getPhoto(id: string, index: number): Observable<Photo> {
    console.log(`getPhoto(${id}, ${index})`);
    const photo: Photo = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gorilla_gorilla_gorilla8.jpg/1024px-Gorilla_gorilla_gorilla8.jpg',
      attribution: 'Par Raul654, license CC by-sa (https://creativecommons.org/licenses/by-sa/3.0/deed.fr)'
    };
    return Observable.of(photo);
  }

  addResponse(id: string, response: string): boolean {
    console.log(`addResponse(${id}, ${response})`);
    const idx = this.quizzMap.get(id) || 0;
    this.quizzMap.set(id, idx + 1);
    return true;
  }

  private shuffle() {
    for (let i = this.data.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      const temp = this.data[i];
      this.data[i] = this.data[j];
      this.data[j] = temp;
    }
    return this.data;
  }
}

