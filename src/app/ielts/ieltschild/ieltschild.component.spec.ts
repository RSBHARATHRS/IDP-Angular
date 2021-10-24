import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeltschildComponent } from './ieltschild.component';

describe('IeltschildComponent', () => {
  let component: IeltschildComponent;
  let fixture: ComponentFixture<IeltschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IeltschildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IeltschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
