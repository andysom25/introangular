import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayeesSearchComponent } from './payees-search.component';
import { PayeesListComponent } from './payees-list-standalone.component';
import { PayeeDetailComponent } from './payee-detail.component';
import { PayeesManagerComponent } from './payees-manager.component';
import { PayeesDataResolverService } from './payees-data-resolver.service';
import { PayeesListWrapperComponent } from './payees-list-wrapper.component';
import { PayeeDetailWrapperComponent } from './payee-detail-wrapper.component';

const routes: Routes = [
  {
    path: 'payees', component: PayeesManagerComponent,
    children: [
      { path: 'search', component: PayeesSearchComponent },
      {
        path: 'list',
        resolve: { payees: PayeesDataResolverService },
        component: PayeesListWrapperComponent
      },
      { path: 'detail/:id', component: PayeeDetailWrapperComponent },
      { path: '', redirectTo: 'search', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PayeesDataResolverService]
})
export class PayeesRoutingModule { }
