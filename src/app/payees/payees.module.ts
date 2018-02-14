import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PayeesManagerComponent } from './payees-manager.component';
import { PayeesListComponent } from './payees-list.component';
import { PayeesDaoService } from './payees-dao.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PayeesManagerComponent, PayeesListComponent],
  exports: [PayeesManagerComponent],
  providers: [PayeesDaoService]
})
export class PayeesModule { }

