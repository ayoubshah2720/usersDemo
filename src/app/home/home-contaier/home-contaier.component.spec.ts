import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContaierComponent } from './home-contaier.component';

describe('HomeContaierComponent', () => {
  let component: HomeContaierComponent;
  let fixture: ComponentFixture<HomeContaierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContaierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContaierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
