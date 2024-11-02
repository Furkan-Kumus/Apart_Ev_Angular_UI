import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookApartComponent } from './book-apart.component';

describe('BookApartComponent', () => {
  let component: BookApartComponent;
  let fixture: ComponentFixture<BookApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookApartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
