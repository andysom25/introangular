import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payee } from './Payee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class PayeesDaoService {

  baseUrl = 'http://localhost:8001/payees/';

constructor(private http: HttpClient) {}


list(): Observable<Payee[]> {
return this.http.get<Payee[]>(this.baseUrl).
catch(this.handleError);
}

handleError(httpError) {
if (httpError.status === 404) {
  return Observable.throw({
    code: 404,
    message: 'No Results Found'

  });
} else if (httpError.status >= 500) {
  return Observable.throw({
    status : httpError.status,
    message: 'REST Server Malfunction!'

  });
} else {
  return Observable.throw({
  status: httpError.status,
  message: 'Your guess is as good as mine'
  });


}
}
}
