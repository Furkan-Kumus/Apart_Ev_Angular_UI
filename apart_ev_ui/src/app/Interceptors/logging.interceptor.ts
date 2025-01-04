import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Geliştirme 1: HTTP metodu ve URL loglama
    console.log(`API çağrısı yapılıyor: [${req.method}] ${req.url}`);

    return next.handle(req).pipe(
      tap(event => {
        // Geliştirme 2: Gelen yanıtın içeriğini loglama
        if (event.type === HttpEventType.Response) {
          console.log(`API yanıtı alındı: [${req.method}] ${req.url}`);
          console.log('Yanıt verileri:', event.body);
        }
      })
    );
  }
}
