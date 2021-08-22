import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundErrorsPageComponent } from './not-found-errors-page.component';

describe('NotFoundErrorsPageComponent', () => {
  let component: NotFoundErrorsPageComponent;
  let fixture: ComponentFixture<NotFoundErrorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundErrorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundErrorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
