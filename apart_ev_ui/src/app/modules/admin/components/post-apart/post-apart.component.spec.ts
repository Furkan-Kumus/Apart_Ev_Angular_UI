import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApartComponent } from './post-apart.component';

describe('PostApartComponent', () => {
  let component: PostApartComponent;
  let fixture: ComponentFixture<PostApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostApartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
