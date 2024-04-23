import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisnotasPage } from './misnotas.page';

describe('MisnotasPage', () => {
  let component: MisnotasPage;
  let fixture: ComponentFixture<MisnotasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisnotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
