import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchApartComponent } from './search-apart.component';

describe('SearchApartComponent', () => {
  let component: SearchApartComponent;
  let fixture: ComponentFixture<SearchApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchApartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
