import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { TxManagerComponent } from './tx/tx-manager.component';
import { PayeesManagerComponent } from './payees/payees-manager.component';
import { DefaultViewComponent } from './default-view.component';

const routes: Routes = [
    { path: 'tx', component: TxManagerComponent},
    { path: 'payees', component: PayeesManagerComponent },
    { path: '', component: DefaultViewComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

