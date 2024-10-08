/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TeamsAddMemberLegacy$Params {

/**
 * The unique identifier of the team.
 */
  team_id: number;

/**
 * The handle for the GitHub user account.
 */
  username: string;
}

export function teamsAddMemberLegacy(http: HttpClient, rootUrl: string, params: TeamsAddMemberLegacy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, teamsAddMemberLegacy.PATH, 'put');
  if (params) {
    rb.path('team_id', params.team_id, {});
    rb.path('username', params.username, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

teamsAddMemberLegacy.PATH = '/teams/{team_id}/members/{username}';
