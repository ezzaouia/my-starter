/**
 * @author: @Med'eZ
 */
import template from './app.component.html';

export class AppComponent {
  template: string;
  restrict: string;

  constructor() {
    this.template = template;
    this.restrict = 'E';
  }
};
