/**
 * @author: @Med'eZ
 */
import { module } from 'angular';
import { AppComponent } from './app.component';

export default module('app', ['ngMaterial', 'ui.router', 'ngMdIcons'])
  .component('app', new AppComponent());
