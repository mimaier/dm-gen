import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerWindowComponent } from './trigger-window.component';

describe('TriggerWindowComponent', () => {
  let component: TriggerWindowComponent;
  let fixture: ComponentFixture<TriggerWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggerWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
