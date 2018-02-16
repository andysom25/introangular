import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PayeesDaoService } from './payees-dao.service';
import { Payee } from './Payee';

@Component({
  selector: 'payee-detail-wrapper',
  templateUrl: './payee-detail-wrapper.component.html',
  styles: []
})
export class PayeeDetailWrapperComponent implements OnInit {

  payee: Payee;

  constructor(private route: ActivatedRoute,
    private dao: PayeesDaoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (map: ParamMap) => {
      const id = map.get('id');
      console.log('Fetching which item: ', map.get('id'));
      this.dao.get(id)
      .subscribe( payee => this.payee = payee );
    } );
  }

}
