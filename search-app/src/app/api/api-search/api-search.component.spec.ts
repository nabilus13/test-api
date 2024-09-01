import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSearchComponent } from './api-search.component';

describe('ApiSearchComponent', () => {
  let component: ApiSearchComponent;
  let fixture: ComponentFixture<ApiSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiSearchComponent]
    });
    fixture = TestBed.createComponent(ApiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
