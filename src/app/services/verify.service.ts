import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient, private errorHandle: ErrorService) { }

  url: string = "http://localhost:3000/user/login"

  //method to check user verified
  CheckVerification(username: string, password:string):Observable<any> {
    return this.http.post<any>(this.url, {username, password})
    .pipe(
      retry(2),
      catchError(this.errorHandle.handleError)
    )
  }
  
}
