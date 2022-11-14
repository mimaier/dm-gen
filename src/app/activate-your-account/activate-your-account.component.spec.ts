import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateYourAccountComponent } from './activate-your-account.component';

describe('ActivateYourAccountComponent', () => {
  let component: ActivateYourAccountComponent;
  let fixture: ComponentFixture<ActivateYourAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateYourAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivateYourAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
