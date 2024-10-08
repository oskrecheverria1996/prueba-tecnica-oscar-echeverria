/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmptyObject } from '../../models/empty-object';

export interface ChecksRerequestSuite$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The unique identifier of the check suite.
 */
  check_suite_id: number;
}

export function checksRerequestSuite(http: HttpClient, rootUrl: string, params: ChecksRerequestSuite$Params, context?: HttpContext): Observable<StrictHttpResponse<EmptyObject>> {
  const rb = new RequestBuilder(rootUrl, checksRerequestSuite.PATH, 'post');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('check_suite_id', params.check_suite_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EmptyObject>;
    })
  );
}

checksRerequestSuite.PATH = '/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest';
