import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MyCartPageComponent} from './my-cart-page.component';

describe('MyCartPageComponent', () => {
  let component: MyCartPageComponent;
  let fixture: ComponentFixture<MyCartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
