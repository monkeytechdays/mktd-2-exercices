import { Component } from '@angular/core';
import { Config } from './shared/index';

/**
 * Composant principale de l'application
 *
 * @export
 * @class AppComponent
 */
@Component({
  moduleId: module.id,
  selector: 'mktd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
