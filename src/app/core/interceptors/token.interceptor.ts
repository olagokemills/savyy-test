import { inject, Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
}from '@angular/common/http';

import { Observable } from 'rxjs'

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = sessionStorage.getItem('jwt') 
        request =  request.clone({
            setHeaders: {
                Authorization: `Bearer Wookie2019`
            }
        });
        return next.handle(request)
    }
}