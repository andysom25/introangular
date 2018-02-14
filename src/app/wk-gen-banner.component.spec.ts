import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WkGenBannerComponent } from './wk-gen-banner.component';

describe('WkGenBannerComponent', () => {
  let component: WkGenBannerComponent;
  let fixture: ComponentFixture<WkGenBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WkGenBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WkGenBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
