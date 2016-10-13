import { StylesCompileResult } from '@angular/compiler/src/style_compiler';
import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { QuizzResult } from '../quizz/quizz.model';
import { LeaderBoardService } from './leaderboard.service';

const makeData = () => [
  { userName: 'Toto', score: 12, duration: 12.123 },
  { userName: 'Tata', score: 10, duration: 9.123 },
  { userName: 'Titi', score: 10, duration: 10.123 },
] as QuizzResult[];

export function main() {

  beforeEach(() => {
    // Configuration du module de test
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        LeaderBoardService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
      .compileComponents();
  });

  describe('Test LeaderBoardService', () => {

    it('can instantiate service when inject service',
      inject([LeaderBoardService], (service: LeaderBoardService) => {
        expect(service instanceof LeaderBoardService).toBe(true);
      }));
  });
}
