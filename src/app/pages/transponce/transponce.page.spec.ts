import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransponcePage } from './transponce.page';

describe('TransponcePage', () => {
  let component: TransponcePage;
  let fixture: ComponentFixture<TransponcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransponcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
