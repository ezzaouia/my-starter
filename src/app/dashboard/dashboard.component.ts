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
    this.$log.debug('Start loading data..');
    // audio
    this.audioEmotions = this.dashboardService.getAudioEmotions()
      .then((res) => {
        this.audioEmotions = res.data;
      }, (err) => {
        this.$log.debug(err);
      });

    // video
    this.videoEmotions = this.dashboardService.getVideoEmotions()
      .then((res) => {
        this.audioEmotions = res.data;
      }, (err) => {
        this.$log.debug(err);
      });

    // self-report
    this.videoEmotions = this.dashboardService.getSelfReportEmotions()
      .then((res) => {
        this.audioEmotions = res.data;
      }, (err) => {
        this.$log.debug(err);
      });

    // sessions' interactions
    this.videoEmotions = this.dashboardService.getSessionsInteractions()
      .then((res) => {
        this.audioEmotions = res.data;
      }, (err) => {
        this.$log.debug(err);
      });
  }
}
