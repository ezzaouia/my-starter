/**
 * @author: @Med'eZ
 */

export class ToolbarComponent {
  template: string;
  restrict: string;

  constructor() {
    this.restrict = 'E';
    this.template = require('./toolbar.component.html');
  }
};
