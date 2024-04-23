import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestclavePage } from './restclave.page';

describe('RestclavePage', () => {
  let component: RestclavePage;
  let fixture: ComponentFixture<RestclavePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestclavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
