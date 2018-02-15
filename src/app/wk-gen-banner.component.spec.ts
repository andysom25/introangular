import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WkGenBannerComponent } from './wk-gen-banner.component';

describe('WkGenBannerComponent', () => {
  let component: WkGenBannerComponent;
  let fixture: ComponentFixture<WkGenBannerComponent>;
  let spy: any;
  const fakenow = 15000000;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WkGenBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(Date, 'now');
    spy.and.returnValue(fakenow);
    fixture = TestBed.createComponent(WkGenBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should us the fake now', () => {
    expect(component.today).toEqual(fakenow);
  });

it('should display the default company with no arguments', () => {
  expect(component.companyName).toEqual('Default Company');
  expect(component.companyName).toBeTruthy();
  expect(fixture.nativeElement.innerHTML).toContain('Default Company');
  expect(fixture.nativeElement.querySelector('h3').innerHTML).toMatch(/Default Company/);
  expect(fixture.nativeElement.querySelector('*:not(h3)').innerHTML).not.toMatch(/Default Company/);
});

it('should reflect changes', () => {

const defaultCompany = component.companyName;
const newCompany = 'Wolters Kluwer';

expect(fixture.nativeElement.querySelector('h3').innerHTML).toContain(defaultCompany);

component.companyName = newCompany;
fixture.detectChanges();
expect(fixture.nativeElement.querySelector('h3').innerHTML).toContain(newCompany);

});

});

