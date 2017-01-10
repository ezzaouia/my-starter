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
  videoEmotions: any;
  selfReportEmotions: any;
  sessionsInteractions: any;

  constructor(private $log: any, private dashboardService: DashboardService) {
    this.$log = $log.getInstance('DashboardController');
  }

  public $onInit(): void {
    this.$log.debug('onInit')
    // load data here
     this.loadJSONData();
  }

  /**
   * Load JSON data (audio, video, self-report and sessions' interactions)
   * Save data in class members.
   */
  loadJSONData() {
    //return new Promise<void>(resolve => {
      // async code goes here
      this.$log.debug('Start loading data..');
      // audio
      this.dashboardService.getAudioEmotions()
        .then((res) => {
          this.audioEmotions = res.data;
        }, (err) => {
          this.$log.error(err);
        });

      // video
      this.dashboardService.getVideoEmotions()
        .then((res) => {
          this.videoEmotions = res.data;
        }, (err) => {
          this.$log.error(err);
        });

      // self-report
      this.dashboardService.getSelfReportEmotions()
        .then((res) => {
          this.selfReportEmotions = res.data;
        }, (err) => {
          this.$log.error(err);
        });

      // sessions' interactions
      this.dashboardService.getSessionsInteractions()
        .then((res) => {
          this.sessionsInteractions = res.data;
        }, (err) => {
          this.$log.error(err);
        });
    //});
  }
}
