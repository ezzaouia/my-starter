/**
 * @author: @Med'eZ
 */

export class AppComponent {
  template: string;
  restrict: string;

  constructor() {
    this.template = `<div class="app">
                      <div ui-view></div>
                      </div>`;
    this.restrict = 'E';
  }
};
