/**
 * @author: @Med'eZ
 */

export class ToolbarComponent {
  template: string;
  restrict: string;

  constructor() {
    this.restrict = 'E';
    this.template = `
    <md-toolbar class="md-hue-2">
      <div class="md-toolbar-tools">
        <md-button class="md-icon-button" aria-label="Settings" ng-disabled="true">
          <md-icon md-svg-icon="img/icons/menu.svg"></md-icon>
        </md-button>
        <h2>
          <span>Toolbar with Disabled/Enabled Icon Buttons</span>
        </h2>
        <span flex></span>
        <md-button class="md-icon-button" aria-label="Favorite">
          <md-icon md-svg-icon="img/icons/favorite.svg" style="color: greenyellow;"></md-icon>
        </md-button>
        <md-button class="md-icon-button" aria-label="More">
          <md-icon md-svg-icon="img/icons/more_vert.svg"></md-icon>
        </md-button>
      </div>
    </md-toolbar>
    `;
  }
};
