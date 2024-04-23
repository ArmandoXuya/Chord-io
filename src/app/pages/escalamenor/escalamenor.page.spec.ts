import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscalamenorPage } from './escalamenor.page';

describe('EscalamenorPage', () => {
  let component: EscalamenorPage;
  let fixture: ComponentFixture<EscalamenorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscalamenorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
