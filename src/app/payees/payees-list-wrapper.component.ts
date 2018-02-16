import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payee } from './Payee';
import ld_sortBy from 'lodash-es/sortBy';

@Component({
  selector: 'payees-list-wrapper',
  templateUrl: './payees-list-wrapper.component.html',
  styles: []
})
export class PayeesListWrapperComponent implements OnInit {

  payees: Payee[];
  sortField: string;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: { payees: Payee[] }) => {
      this.payees = data.payees;
    });
  }

  handleSelectPayee(payee) {
    console.log('You selected ', payee.payeeName);
    this.router.navigate(['payees', 'detail', payee.id]);
  }

  handleSortPayee(sortField) {
    console.log('You want to sort on ', sortField);

    if (this.sortField === sortField) {
      this.payees.reverse();
    } else {
      this.payees = ld_sortBy(this.payees, sortField);
    }

    this.sortField = sortField;
  }

  handleError(err) {
    console.log('PayeesManager.handleError():  ', err);
  }
}
