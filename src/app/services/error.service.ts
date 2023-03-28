import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      //clientside error
      console.log('An error occured: ', error.error);
    } else {
      //backend error
      console.log(`Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something went wrong: please try again later'));
  }
}
