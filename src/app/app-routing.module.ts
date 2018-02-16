import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TxManagerComponent } from './tx/tx-manager.component';
import { PayeesManagerComponent } from './payees/payees-manager.component';
import { DefaultViewComponent } from './default-view.component';

const routes: Routes = [
  { path: 'tx', component: TxManagerComponent },
  { path: 'home', component: DefaultViewComponent },
  // { path: '', component: DefaultViewComponent},
  // { path: '', redirectTo: '/home' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/tx' }
  // { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
