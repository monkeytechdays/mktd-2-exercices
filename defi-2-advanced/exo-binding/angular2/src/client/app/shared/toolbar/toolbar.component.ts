import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { QuizzService } from '../quizz/quizz.service';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'mktd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {
  name: string;
  subscription: Subscription;
  seconds: number;

  constructor(private quizzService: QuizzService) {
    // TODO S'abonner aux quizzService.userName$ et quizzService.quizz$
  }

  stopChrono() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.seconds = null;
  }

  private startChrono() {
    this.stopChrono();
    // TODO récupérer la Subscription d'un observable (interval)
    // cet observable doit mettre à jour l'attribut seconds chaque ...
    // this.subscription = ;
  }
}

