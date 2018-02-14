import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxManagerComponent } from './tx-manager.component';
import { TxListComponent } from './tx-list.component';
import { TxDaoService } from './tx-dao.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [TxManagerComponent, TxListComponent],
  exports: [TxManagerComponent],
  providers: [TxDaoService]
})
export class TxModule { }
