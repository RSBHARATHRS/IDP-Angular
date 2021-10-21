import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImageContainerComponent } from './main-image-container.component';

describe('MainImageContainerComponent', () => {
  let component: MainImageContainerComponent;
  let fixture: ComponentFixture<MainImageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainImageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
