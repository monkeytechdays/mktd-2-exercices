import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Affiche une durée avec moment
 * @export
 * @class TimePipe
 * @implements {PipeTransform}
 */
// TODO Create un Pipe pour afficher la durée
export class TimePipe{

  private static formatMillis(duration: moment.Duration): string {
    let result = String(duration.milliseconds() | 0);
    // padding
    while (result.length < 3) {
      result = '0' + result;
    }
    return result;
  }

  private static formatSeconds(seconds: number): string {
    const duration = moment.duration(seconds, 'seconds');
    const millis = TimePipe.formatMillis(duration);
    return `${duration.seconds()}s ${millis}ms`;
  }
}
