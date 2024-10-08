/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TeamsDeleteDiscussionCommentInOrg$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The slug of the team name.
 */
  team_slug: string;

/**
 * The number that identifies the discussion.
 */
  discussion_number: number;

/**
 * The number that identifies the comment.
 */
  comment_number: number;
}

export function teamsDeleteDiscussionCommentInOrg(http: HttpClient, rootUrl: string, params: TeamsDeleteDiscussionCommentInOrg$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, teamsDeleteDiscussionCommentInOrg.PATH, 'delete');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('team_slug', params.team_slug, {});
    rb.path('discussion_number', params.discussion_number, {});
    rb.path('comment_number', params.comment_number, {});
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

teamsDeleteDiscussionCommentInOrg.PATH = '/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}';
