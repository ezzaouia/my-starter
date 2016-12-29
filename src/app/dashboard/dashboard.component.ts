/**
 * @author: @Med'eZ
 */

export class DashboardComponent {
  template: string;
  restrict: string;

  constructor() {
    this.restrict = 'E';
    this.template = `
      <dashboard-toolbar></dashboard-toolbar>
    `;

  }
};
