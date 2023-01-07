import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryDrawPageComponent } from './lottery-draw-page.component';

describe('LotteryDrawPageComponent', () => {
  let component: LotteryDrawPageComponent;
  let fixture: ComponentFixture<LotteryDrawPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotteryDrawPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotteryDrawPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
