/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IntegrationInstallationRequest } from '../../models/integration-installation-request';

export interface AppsListInstallationRequestsForAuthenticatedApp$Params {

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function appsListInstallationRequestsForAuthenticatedApp(http: HttpClient, rootUrl: string, params?: AppsListInstallationRequestsForAuthenticatedApp$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IntegrationInstallationRequest>>> {
  const rb = new RequestBuilder(rootUrl, appsListInstallationRequestsForAuthenticatedApp.PATH, 'get');
  if (params) {
    rb.query('per_page', params.per_page, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<IntegrationInstallationRequest>>;
    })
  );
}

appsListInstallationRequestsForAuthenticatedApp.PATH = '/app/installation-requests';
