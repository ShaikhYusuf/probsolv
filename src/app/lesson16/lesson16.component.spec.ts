import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson16Component } from './lesson16.component';

describe('Lesson16Component', () => {
  let component: Lesson16Component;
  let fixture: ComponentFixture<Lesson16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
