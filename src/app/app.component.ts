import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  company = 'The Boring Corporation';

  views = {
    tx: false,
    payees: false
  };

  handleViewSwitch(viewName) {
    for (const view in this.views) {
      this.views[view] = false;
    }
    this.views[viewName] = true;
  }

  pickButtonColor(viewName) {
    return this.views[viewName] ? 'btn-primary' : 'btn-danger' ;
  }
}
