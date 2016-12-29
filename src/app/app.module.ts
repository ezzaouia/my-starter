/**
 * @author: @Med'eZ
 */
import { module } from 'angular';
import { AppComponent } from './app.component';
import AppRoutes from './app.routes';
import DashboardComponent from './dashboard/dashboard.module';

export default module('app', [
  'ngMaterial',
  'ngMdIcons',
  DashboardComponent.name,
  AppRoutes.name
])
  .component('app', new AppComponent());
