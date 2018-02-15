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

it('should display the default company with no arguments', () => {
  expect(component.companyName).toEqual('Default Company');
  expect(component.companyName).toBeTruthy();
  expect(fixture.nativeElement.innerHTML).toContain('Default Company');
  expect(fixture.nativeElement.querySelector('h3').innerHTML).toMatch(/Default Company/);
  expect(fixture.nativeElement.querySelector('*:not(h3)').innerHTML).not.toMatch(/Default Company/);
});
});
