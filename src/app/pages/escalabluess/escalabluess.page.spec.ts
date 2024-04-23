import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscalabluessPage } from './escalabluess.page';

describe('EscalabluessPage', () => {
  let component: EscalabluessPage;
  let fixture: ComponentFixture<EscalabluessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscalabluessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
