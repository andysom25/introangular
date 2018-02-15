import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { PayeesManagerComponent } from './payees-manager.component';
import { PayeesListComponent } from './payees-list.component';
import { PayeesDaoService } from './payees-dao.service';
import { PayeesFilterComponent } from './payees-filter.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [PayeesManagerComponent, PayeesListComponent, PayeesFilterComponent],
  exports: [PayeesManagerComponent],
  providers: [PayeesDaoService]
})
export class PayeesModule { }

