import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Resolve
} from '@angular/router';
import { Payee } from './Payee';
import { Observable } from 'rxjs/Observable';
import {PayeesDaoService} from './payees-dao.service';

@Injectable()
export class PayeesDataResolverService implements Resolve<Payee[]> {

  constructor(private dao: PayeesDaoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Payee[]> {
    return this.dao.list();
  }

}
