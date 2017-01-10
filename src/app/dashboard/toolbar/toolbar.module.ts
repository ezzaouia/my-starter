/**
 * @author: @Med'eZ
 */
import { module } from 'angular';
import { ToolbarComponent } from './toolbar.component';
import DashboardService from '../dashboard.service';
import ToolbarService from './toolbar.service';
import './toolbar.component.scss'

export default module('dashboard.toolbar',
  [
    DashboardService.name,
    ToolbarService.name
  ])
  .component('dashboardToolbar', new ToolbarComponent());
