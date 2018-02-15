import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { PayeesManagerComponent } from './payees-manager.component';
import { PayeesListComponent } from './payees-list.component';
import { PayeesDaoService } from './payees-dao.service';
import { PayeesFilterComponent } from './payees-filter.component';
import { PayeeDetailComponent } from './payee-detail.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PayeeDetailModalComponent } from './payee-detail-modal.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  declarations: [PayeesManagerComponent, PayeesListComponent, PayeesFilterComponent, PayeeDetailComponent, PayeeDetailModalComponent],
  exports: [PayeesManagerComponent],
  providers: [PayeesDaoService],
  entryComponents: [[PayeeDetailModalComponent]]
})
export class PayeesModule { }

