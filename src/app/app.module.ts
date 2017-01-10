/**
 * @author: @Med'eZ
 */
import { module } from 'angular';
import { AppComponent } from './app.component';
import AppTheme from './app.theme';
import AppRoutes from './app.routes';
import DashboardComponent from './dashboard/dashboard.module';
import './app.component.scss'


export default module('app', [
  'ngMaterial',
  'ngMdIcons',
  'angular-logger',
  AppTheme.name,
  DashboardComponent.name,
  AppRoutes.name
])
  .component('app', new AppComponent());
