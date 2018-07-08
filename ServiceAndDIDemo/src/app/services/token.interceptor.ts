import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthenticationService,private router:Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("========="+request.headers);
    console.log("========="+this.auth.getToken());
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request)
    .do((event: HttpEvent<any>) => {
      if(event instanceof HttpResponse){
        console.log(event+" :::::");
      }
      }, (err: any) => {
      // if the token has expired.
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          // this is where you can do anything like navigating
          this.router.navigateByUrl('/login');
        }
      }
    });

  }
}