import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PayeesManagerComponent } from './payees-manager.component';
import { PayeesListComponent } from './payees-list.component';
import { PayeesDaoService } from './payees-dao.service';
import { PayeesFilterComponent } from './payees-filter.component';
import { PayeeDetailComponent } from './payee-detail.component';
import { PayeeDetailModalComponent } from './payee-detail-modal.component';
import { PayeesSearchComponent } from './payees-search.component';
import {PayeesRoutingModule} from './payees-routing.module';
import { PayeesDataResolverService } from './payees-data-resolver.service';
import { PayeesListWrapperComponent } from './payees-list-wrapper.component';
import { PayeeDetailWrapperComponent } from './payee-detail-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    PayeesRoutingModule
  ],
  declarations: [PayeesManagerComponent, PayeesListComponent,
    PayeesFilterComponent, PayeeDetailComponent, PayeeDetailModalComponent,
     PayeesSearchComponent,
    PayeesListWrapperComponent, PayeeDetailWrapperComponent],
  exports: [PayeesManagerComponent],
  providers: [PayeesDaoService, PayeesDataResolverService],
  entryComponents: [PayeeDetailModalComponent]
})
export class PayeesModule { }
