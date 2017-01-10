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
   * Return audio emotion from json file
   */
  getAudioEmotions() {
    this.$log.debug('getAudioEmotions')
    return this.$http.get('assets/data/emoaudios.json');
  }

  /**
  * Return audio emotion from json file
  */
  getVideoEmotions() {
    this.$log.debug('getAudioEmotions')
    return this.$http.get('assets/data/emovideos.json');
  }

  /**
  * Return audio emotion from json file
  */
  getSelfReportEmotions() {
    this.$log.debug('getAudioEmotions')
    return this.$http.get('assets/data/emoaudios.json');
  }
}

export default module('dashboard.service', [])
  .service('dashboardService', DashboardService);


