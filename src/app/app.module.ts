import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PayeesModule} from './payees/payees.module';
import { AppComponent } from './app.component';
import {WKBannerComponent} from './wk-banner';
import { WkGenBannerComponent } from './wk-gen-banner.component';
import { TxModule } from './tx/tx.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent, WKBannerComponent, WkGenBannerComponent
  ],
  imports: [
    BrowserModule,
    PayeesModule,
    TxModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
