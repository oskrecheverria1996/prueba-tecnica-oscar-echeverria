/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface CodespacesAddRepositoryForSecretForAuthenticatedUser$Params {

/**
 * The name of the secret.
 */
  secret_name: string;
  repository_id: number;
}

export function codespacesAddRepositoryForSecretForAuthenticatedUser(http: HttpClient, rootUrl: string, params: CodespacesAddRepositoryForSecretForAuthenticatedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, codespacesAddRepositoryForSecretForAuthenticatedUser.PATH, 'put');
  if (params) {
    rb.path('secret_name', params.secret_name, {});
    rb.path('repository_id', params.repository_id, {});
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

codespacesAddRepositoryForSecretForAuthenticatedUser.PATH = '/user/codespaces/secrets/{secret_name}/repositories/{repository_id}';
