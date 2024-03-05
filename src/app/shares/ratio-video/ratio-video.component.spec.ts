import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioVideoComponent } from './ratio-video.component';

describe('RatioVideoComponent', () => {
  let component: RatioVideoComponent;
  let fixture: ComponentFixture<RatioVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatioVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
