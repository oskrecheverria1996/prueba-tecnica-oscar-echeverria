/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MigrationsDeleteArchiveForOrg$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The unique identifier of the migration.
 */
  migration_id: number;
}

export function migrationsDeleteArchiveForOrg(http: HttpClient, rootUrl: string, params: MigrationsDeleteArchiveForOrg$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, migrationsDeleteArchiveForOrg.PATH, 'delete');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('migration_id', params.migration_id, {});
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

migrationsDeleteArchiveForOrg.PATH = '/orgs/{org}/migrations/{migration_id}/archive';
