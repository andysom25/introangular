import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TxManagerComponent } from './tx-manager.component';
import { TxListComponent } from './tx-list.component';
import { TxDaoService } from './tx-dao.service';
import { HttpClientModule } from '@angular/common/http';
import { TxFilterComponent } from './tx-filter.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [TxManagerComponent, TxListComponent, TxFilterComponent],
  exports: [TxManagerComponent],
  providers: [TxDaoService]
})
export class TxModule { }
