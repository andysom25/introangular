import { Component, OnInit } from '@angular/core';
import ld_isNumber from 'lodash-es/isNumber';

@Component({
  selector: 'tx-filter',
  templateUrl: './tx-filter.component.html',
  styles: []
})
export class TxFilterComponent implements OnInit {

  criteria: {
  amountExact?: number;
  payeeName?: string;
  amountHigh?: number;
  amountLow?: number;
  } = {};

  constructor() { }

  ngOnInit() {
  }

handleFilter () {


}

getDisabled(fieldName) {

  switch (fieldName) {
    case 'amountHigh':
    case 'amountLow' :
    return ld_isNumber(this.criteria.amountExact) ? true : false;
    case 'amountExact':
    return ld_isNumber(this.criteria.amountHigh) || ld_isNumber(this.criteria.amountLow) ? true : false;
    default:
    return false;
  }
}



}
