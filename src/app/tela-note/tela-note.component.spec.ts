import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaNoteComponent } from './tela-note.component';

describe('TelaNoteComponent', () => {
  let component: TelaNoteComponent;
  let fixture: ComponentFixture<TelaNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
