/**
 * @author: @Med'eZ
 */
import { module } from 'angular';
import * as config from 'config';
import { AppComponent } from './app.component';

export default module('app', ['ngMaterial'])
  .component('app', new AppComponent());
