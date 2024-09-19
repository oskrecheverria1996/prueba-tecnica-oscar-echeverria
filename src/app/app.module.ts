import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from './app.routing';
import { BrowserModule, Title } from "@angular/platform-browser";
import { ToastrModule } from "ngx-toastr";
import { CommonModule } from "@angular/common";
import { CookieService } from "ngx-cookie-service";
import { AuthInterceptor } from './shared/interceptors/auth-interceptor.interceptor';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    CommonModule,
    ToastrModule.forRoot(
      {
          preventDuplicates: true,
          resetTimeoutOnDuplicate:true
      }
  ),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
