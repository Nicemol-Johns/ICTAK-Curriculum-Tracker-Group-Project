import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementFormComponent } from './requirement-form.component';

describe('RequirementFormComponent', () => {
  let component: RequirementFormComponent;
  let fixture: ComponentFixture<RequirementFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementFormComponent]
    });
    fixture = TestBed.createComponent(RequirementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
