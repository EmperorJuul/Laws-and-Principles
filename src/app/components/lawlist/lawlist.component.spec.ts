import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawlistComponent } from './lawlist.component';

describe('LawlistComponent', () => {
  let component: LawlistComponent;
  let fixture: ComponentFixture<LawlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawlistComponent]
    });
    fixture = TestBed.createComponent(LawlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
