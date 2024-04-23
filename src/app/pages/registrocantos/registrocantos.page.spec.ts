import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrocantosPage } from './registrocantos.page';

describe('RegistrocantosPage', () => {
  let component: RegistrocantosPage;
  let fixture: ComponentFixture<RegistrocantosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrocantosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
