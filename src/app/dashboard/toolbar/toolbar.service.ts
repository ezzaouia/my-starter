/**
 * @author: @Med'eZ
 */
import { module } from 'angular';

export class ToolbarService {
  'ngInject';
  private _arousalThresholds: number[] = [10, 20, 30, 40, 50];

  constructor(private $log: any, private $http: ng.IHttpService) {
    this.$log = $log.getInstance(ToolbarService.name);
  }

  // just for :D I forget the name of th DP ;)
  get arousalThresholds(): number[] {
    return this._arousalThresholds;
  }


}

export default module('toolbar.service', [])
  .service('toolbarService', ToolbarService);


