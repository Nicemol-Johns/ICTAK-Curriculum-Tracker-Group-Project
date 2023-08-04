import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyChatComponent } from './faculty-chat.component';

describe('FacultyChatComponent', () => {
  let component: FacultyChatComponent;
  let fixture: ComponentFixture<FacultyChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyChatComponent]
    });
    fixture = TestBed.createComponent(FacultyChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
