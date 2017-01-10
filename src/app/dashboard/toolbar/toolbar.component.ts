/**
 * @author: @Med'eZ
 */
'use sctrict';

import { ToolbarService } from './toolbar.service';

export class ToolbarComponent {
  template: string;
  restrict: string;
  controller: any;

  constructor() {
    this.restrict = 'E';
    this.template = require('./toolbar.component.html');
    this.controller = ToolbarController;
  }
};

class ToolbarController {
  'ngInject';

  constructor(private toolbarService: ToolbarService) {}

  arousalThresholds(): number[] {
    return this.toolbarService.arousalThresholds;
  }
}
