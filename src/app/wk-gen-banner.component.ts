import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wk-gen-banner',
  templateUrl: './wk-gen-banner.component.html',
  styles: []
})
export class WkGenBannerComponent implements OnInit {

  @Input()
  companyName = 'Default Company';
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

}
