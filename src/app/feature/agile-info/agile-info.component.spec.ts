import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileInfoComponent } from './agile-info.component';

describe('AgileInfoComponent', () => {
  let component: AgileInfoComponent;
  let fixture: ComponentFixture<AgileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgileInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
