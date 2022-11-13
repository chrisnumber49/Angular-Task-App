import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

// suite of tests for component
describe('HeaderComponent', () => {
  // first step of AAA: arrange
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  // reset the component before each test it()
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // spec of each test, can be multiple tests in one component
  it('should create', () => {
    // second step of AAA: act
    // third step of AAA: assert
    expect(component).toBeTruthy();
  });
});
