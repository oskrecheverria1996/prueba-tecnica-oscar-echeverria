/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = environment.endpoint;
}

/**
 * Parameters for `AppModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
