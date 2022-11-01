import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWindowComponent } from './image-window.component';

describe('ImageWindowComponent', () => {
  let component: ImageWindowComponent;
  let fixture: ComponentFixture<ImageWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
