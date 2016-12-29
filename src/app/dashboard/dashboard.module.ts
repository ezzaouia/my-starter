/**
 * @author: @Med'eZ
 */
import { module } from 'angular';
import { DashboardComponent } from './dashboard.component';
import ToolbarComponent from './toolbar/toolbar.module';

export default module('app.dashboard', [ToolbarComponent.name])
  .component('dashboard', new DashboardComponent());
