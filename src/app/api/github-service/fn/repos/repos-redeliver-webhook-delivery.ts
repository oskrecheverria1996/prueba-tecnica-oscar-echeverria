/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ReposRedeliverWebhookDelivery$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery.
 */
  hook_id: number;
  delivery_id: number;
}

export function reposRedeliverWebhookDelivery(http: HttpClient, rootUrl: string, params: ReposRedeliverWebhookDelivery$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, reposRedeliverWebhookDelivery.PATH, 'post');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('hook_id', params.hook_id, {});
    rb.path('delivery_id', params.delivery_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      }>;
    })
  );
}

reposRedeliverWebhookDelivery.PATH = '/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts';
