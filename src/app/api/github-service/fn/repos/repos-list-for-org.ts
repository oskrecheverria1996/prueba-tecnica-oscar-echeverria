/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MinimalRepository } from '../../models/minimal-repository';

export interface ReposListForOrg$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * Specifies the types of repositories you want returned.
 */
  type?: 'all' | 'public' | 'private' | 'forks' | 'sources' | 'member';

/**
 * The property to sort the results by.
 */
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';

/**
 * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
 */
  direction?: 'asc' | 'desc';

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function reposListForOrg(http: HttpClient, rootUrl: string, params: ReposListForOrg$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MinimalRepository>>> {
  const rb = new RequestBuilder(rootUrl, reposListForOrg.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.query('type', params.type, {});
    rb.query('sort', params.sort, {});
    rb.query('direction', params.direction, {});
    rb.query('per_page', params.per_page, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MinimalRepository>>;
    })
  );
}

reposListForOrg.PATH = '/orgs/{org}/repos';
