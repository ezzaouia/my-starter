/**
 * @author: @Med'eZ
 */
import { DashboardService } from './dashboard.service';

export class DashboardComponent {
  template: string;
  restrict: string;
  controller: any;

  constructor() {
    this.restrict = 'E';
    this.template = require('./dashboard.component.html');
    this.controller = DashboardController;

  }
};

class DashboardController {
  'ngInject';
  audioEmotions: any;

  constructor(private $log: any, private dashboardService: DashboardService) {
    this.$log = $log.getInstance('DashboardController');

    this.audioEmotions = dashboardService.getAudioEmotions()
      .then((res) => {
        this.$log.debug(res.data);
        this.audioEmotions = res.data;
      }, (err) => {
        this.$log.debug(err);
      });
  }

  public $onInit(): void {
    this.$log.debug('onInit')
  }
}
