import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelCelComponent } from './tel-cel.component';

describe('TelCelComponent', () => {
  let component: TelCelComponent;
  let fixture: ComponentFixture<TelCelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelCelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
