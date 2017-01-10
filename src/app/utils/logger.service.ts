/**
 * @author: @Med'eZ
 */
import angular from 'angular';


interface ILogger {
  info: (message: string, data?: {}, title?: string) => void;
  error: (message: string, data?: {}, title?: string) => void;
  success: (message: string, data?: {}, title?: string) => void;
  warning: (message: string, data?: {}, title?: string) => void;
  log: (...args: any[]) => void;
}

export class Logger implements ILogger {
  static $inject: Array<string> = ['$log', 'toastr'];

  constructor(private $log: ng.ILogService, private toastr: any) { }

  // straight to console; bypass toastr
  log(...args: any[]) {
    this.$log.log(args);
  }

  error(message: string, data?: {}, title?: string) {
    this.$log.error('Error: ' + message, '\nSummary:', title, '\nDetails:', data);
  }

  info(message: string, data?: {}, title?: string) {
    this.$log.info('Info: ' + message, '\nSummary:', title, '\nDetails:', data);
  }

  success(message: string, data?: {}, title?: string) {
    this.$log.info('Success: ' + message, '\nSummary:', title, '\nDetails:', data);
  }

  warning(message: string, data?: {}, title?: string) {
    this.$log.warn('Warning: ' + message, '\nSummary:', title, '\nDetails:', data);
  }

}

