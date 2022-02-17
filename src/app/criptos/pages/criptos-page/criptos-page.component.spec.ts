import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptosPageComponent } from './criptos-page.component';

describe('CriptosPageComponent', () => {
  let component: CriptosPageComponent;
  let fixture: ComponentFixture<CriptosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
