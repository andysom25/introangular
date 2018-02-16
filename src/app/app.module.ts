import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PayeesModule } from './payees/payees.module';
import { AppComponent } from './app.component';
import { WKBannerComponent } from './wk-banner';
import { WkGenBannerComponent } from './wk-gen-banner.component';
import { TxModule } from './tx/tx.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from '../app/core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PeopleModule } from './people/people.module';
import { AppRoutingModule } from './app-routing.module';
import { DefaultViewComponent } from './default-view.component';

@NgModule({
  declarations: [
    AppComponent, WKBannerComponent, WkGenBannerComponent, DefaultViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    PayeesModule,
    TxModule,
    SharedModule,
    CoreModule,
    PeopleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
