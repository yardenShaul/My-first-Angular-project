import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsAppComponent } from './coins-app.component';

describe('CoinsAppComponent', () => {
  let component: CoinsAppComponent;
  let fixture: ComponentFixture<CoinsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinsAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
