import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxFilterComponent } from './tx-filter.component';

xdescribe('TxFilterComponent', () => {
  let component: TxFilterComponent;
  let fixture: ComponentFixture<TxFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
