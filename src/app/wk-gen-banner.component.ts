import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wk-gen-banner',
  templateUrl: './wk-gen-banner.component.html'
})
export class WkGenBannerComponent implements OnInit {

  @Input()
  companyName = 'Default Company';

  today = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
