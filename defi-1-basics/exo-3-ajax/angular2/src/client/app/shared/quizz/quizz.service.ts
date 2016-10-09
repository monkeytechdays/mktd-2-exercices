
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Quizz, QuizzResponses, QuizzResult, Photo, Question } from './quizz.model';

/**
 * QuizzService.
 * Utilise Http pour les accés HTTP en AJAX
 * Utilise Storage pour stocker les données
 */
// TODO Rendre ce service Injectable
export class QuizzService {

  /**
   * Méthode statique utilitaire pour le traitement des erreurs HTTP
   */
  private static handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log dans la console
    return Observable.throw(errMsg); // Lance une erreur
  }

  /**
   * Créer un nouveau QuizzService avec les services Http et Storage injectés.
   * @param {Http} http - Le service Http injecté.
   * @param {Storage} storage - Le service Storage injecté.
   * @constructor
   */
  constructor(
    private http: Http,
    private storage: Storage) {
  }

  create(name: string): Observable<Quizz> {
    const setCurrentQuizz = (quizz:Quizz) => {
        this.setQuizz(quizz);
        this.setQuizzResponses(quizz.id, new QuizzResponses());
        return quizz;
    };
    // TODO utiliser le service Http pour faire le GET api/quizz?userName= pour créer le quizz
    // TODO utiliser la fonction map des Observables et setCurrentQuizz
    // TODO utiliser QuizzService.handleError pour traiter les éventuelles erreurs
    return Observable.throw('A implémenter');
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
    // TODO utiliser le service Http pour faire le GET api/quizz/id/index pour récupérer la photo
    // TODO utiliser la fonction map pour retourner la photo
    // TODO utiliser QuizzService.handleError pour traiter les éventuelles erreurs
    return Observable.throw('A implémenter');
  }

  addResponse(id: string, response: string): boolean {
    const resp = this.getQuizzResponses(id);
    resp.responses.push(response);
    this.setQuizzResponses(id, resp);
    // continuer s'il y a pas d'autres questions
    return resp.responses.length !== this.getQuizz(id).questions.length;
  }

  sendResponses(id: string): Observable<QuizzResult> {
    // TODO utiliser le service Http pour faire le POST api/quizz/id pour envoyer les réponses
    // TODO utiliser la fonction map pour retourner le résultat, il faut aussi enregistrer le résultat avec setQuizzResult
    // TODO utiliser QuizzService.handleError pour traiter les éventuelles erreurs
    return Observable.throw('A implémenter');
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

