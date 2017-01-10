/**
 * @author: @Med'eZ
 */
import { module } from 'angular';
import { ToolbarComponent } from './toolbar.component';
import DashboardService from '../dashboard.service';
import './toolbar.component.scss'

export default module('dashboard.toolbar', [DashboardService.name])
  .component('dashboardToolbar', new ToolbarComponent());
