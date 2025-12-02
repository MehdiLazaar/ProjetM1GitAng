import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumeListComponent } from './legume-list.component';

describe('LegumeListComponent', () => {
  let component: LegumeListComponent;
  let fixture: ComponentFixture<LegumeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegumeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegumeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
