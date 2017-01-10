/**
 * @author: @Med'eZ
 */
import { module } from 'angular';

export class DashboardService {
  'ngInject';

  constructor(private $log: any, private $http: ng.IHttpService) {
    this.$log = $log.getInstance('DashboardService');
  }

  /**
   * Return Promise: audio emotion from json file
   */
  getAudioEmotions() {
    this.$log.debug('getAudioEmotions')
    return this.$http.get('assets/data/emoaudios.json');
  }

  /**
  * Return Promise: video emotion from json file
  */
  getVideoEmotions() {
    this.$log.debug('getVideoEmotions')
    return this.$http.get('assets/data/emovideos.json');
  }

  /**
  * Return Promise: self-report emotion from json file
  */
  getSelfReportEmotions() {
    this.$log.debug('getSelfReportEmotions')
    return this.$http.get('assets/data/emoselfreporteds.json');
  }

  /**
 * Return Promise: sessions' interactions from json file
 */
  getSessionsInteractions() {
    this.$log.debug('getSessionsInteractions')
    return this.$http.get('assets/data/emosessioninteractions.json');
  }
}

export default module('dashboard.service', [])
  .service('dashboardService', DashboardService);


