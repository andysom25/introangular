import { Component, OnInit, Input } from '@angular/core';
import { Payee } from './Payee';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'payee-detail-modal',
  templateUrl: './payee-detail-modal.component.html',
  styles: []
})
export class PayeeDetailModalComponent implements OnInit {

@Input()
payee: Payee;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

