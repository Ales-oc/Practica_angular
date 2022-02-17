import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCriptosComponent } from './tabla-criptos.component';

describe('TablaCriptosComponent', () => {
  let component: TablaCriptosComponent;
  let fixture: ComponentFixture<TablaCriptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCriptosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCriptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
