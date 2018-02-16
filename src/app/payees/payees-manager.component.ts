import { Component, OnInit, ViewChild } from '@angular/core';
import { PayeesDaoService } from './payees-dao.service';
import { Payee } from './Payee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import ld_sortBy from 'lodash-es/sortBy';
import ld_get from 'lodash-es/get';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayeeDetailComponent } from './payee-detail.component';
import { PayeeDetailModalComponent } from './payee-detail-modal.component';
import { ActivatedRoute } from '@angular/router';
import { PayeesListComponent } from './payees-list-standalone.component';

@Component({
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: []
})
export class PayeesManagerComponent implements OnInit {

  payees: Payee[];
  originalPayees: Payee[];
  asyncPayees: Observable<Payee[]>;
  sortField: string;

  constructor(public dao: PayeesDaoService,
    private modalService: NgbModal, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route) {
      this.route.data.subscribe((data: { payees: Payee[] }) => {
        console.log('PM fetched data from route.');
        this.payees = data.payees;
        this.originalPayees = data.payees;
      });
    } else {
      this.asyncPayees = this.dao.list();
      this.asyncPayees.subscribe(payees => {
        this.payees = payees;
        this.originalPayees = payees;
      });
    }
  }

  handleFilterPayees(criteria) {
    // Filter out keys with non-truthy values
    const criteriaKeys = Object.keys(criteria)
      .filter(key => criteria[key]);

    // Iterate over the original payees
    this.payees = this.originalPayees.filter(payee => criteriaKeys.every(
      // For every key with a value, the payee[key] must contain criteria[key]
      // If it doesn't, payee and criteria do not match
      key => {
        if (key !== 'category') {
          return payee[key] && payee[key].includes(criteria[key]);
        } else {
          const value = ld_get(payee, 'category.categoryName');
          return value ? value.includes(criteria[key]) : false;
        }
      }
    ));
  }

  handleSelectPayee(payee) {
    console.log('You selected ', payee.payeeName);
    const pdm = this.modalService.open(PayeeDetailModalComponent);
    pdm.componentInstance.payee = payee;
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
