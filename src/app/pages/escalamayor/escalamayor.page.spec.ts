import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscalamayorPage } from './escalamayor.page';

describe('EscalamayorPage', () => {
  let component: EscalamayorPage;
  let fixture: ComponentFixture<EscalamayorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscalamayorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
