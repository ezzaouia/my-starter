/**
 * @author: @Med'eZ
 */
import { module } from 'angular';
import { DashboardComponent } from './dashboard.component';
import DashboardService from './dashboard.service';
import ToolbarComponent from './toolbar/toolbar.module';

export default module('app.dashboard', [
  ToolbarComponent.name,
  DashboardService.name
])
  .component('dashboard', new DashboardComponent());
