import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxManagerComponent } from './tx-manager.component';
import { TxListComponent } from './tx-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TxManagerComponent, TxListComponent],
  exports: [TxManagerComponent]
})
export class TxModule { }
