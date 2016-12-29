/**
 * @author: @Med'eZ
 */
import { module } from 'angular';
import { ToolbarComponent } from './toolbar.component';

export default module('dashboard.toolbar', [])
  .component('dashboardToolbar', new ToolbarComponent());
