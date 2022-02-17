import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrePageComponent } from './libre-page.component';

describe('LibrePageComponent', () => {
  let component: LibrePageComponent;
  let fixture: ComponentFixture<LibrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
