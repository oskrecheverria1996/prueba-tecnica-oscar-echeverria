/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FullRepository } from '../../models/full-repository';

export interface SecurityAdvisoriesCreateFork$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The GHSA (GitHub Security Advisory) identifier of the advisory.
 */
  ghsa_id: string;
}

export function securityAdvisoriesCreateFork(http: HttpClient, rootUrl: string, params: SecurityAdvisoriesCreateFork$Params, context?: HttpContext): Observable<StrictHttpResponse<FullRepository>> {
  const rb = new RequestBuilder(rootUrl, securityAdvisoriesCreateFork.PATH, 'post');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('ghsa_id', params.ghsa_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FullRepository>;
    })
  );
}

securityAdvisoriesCreateFork.PATH = '/repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks';
