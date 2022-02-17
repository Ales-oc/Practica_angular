import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptoDetailsComponent } from './cripto-details.component';

describe('CriptoDetailsComponent', () => {
  let component: CriptoDetailsComponent;
  let fixture: ComponentFixture<CriptoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
