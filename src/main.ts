/**
 * @author: @Med'eZ
 */
import { bootstrap } from 'angular';
import { element } from 'angular';
import './app'
import './styles.scss';

element(document).ready(() => bootstrap(document, ['app']));
