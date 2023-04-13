import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { ErrorService } from './error.service';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient, private errorHandle: ErrorService) { }

  url: string = "http://localhost:3000/user/signup"

  //method to check user verified
  signUp(username: string, password: string, proffession: string):Observable<any> {

    return this.http.post<any>(this.url, {username, password, proffession})
    .pipe(
      retry(2),
      catchError(this.errorHandle.handleError)
    )
  }
  
}
