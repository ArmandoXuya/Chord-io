import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscalaArabePage } from './escala-arabe.page';

describe('EscalaArabePage', () => {
  let component: EscalaArabePage;
  let fixture: ComponentFixture<EscalaArabePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscalaArabePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
