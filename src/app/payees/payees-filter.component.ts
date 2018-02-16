import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'payees-filter',
  templateUrl: './payees-filter.component.html',
  styles: []
})
export class PayeesFilterComponent implements OnInit {

  criteria: {
    payeeName?: string;
    city?: string;
    state?: string;
    category?: string
  } = {};

  @Output()
  filterPayees = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleFilter() {
    // console.log('Current criteria: ', this.criteria);
    this.filterPayees.emit(this.criteria);
  }

}
