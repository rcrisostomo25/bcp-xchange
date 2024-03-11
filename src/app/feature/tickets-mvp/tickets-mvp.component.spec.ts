import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsMvpComponent } from './tickets-mvp.component';

describe('TicketsMvpComponent', () => {
  let component: TicketsMvpComponent;
  let fixture: ComponentFixture<TicketsMvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsMvpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketsMvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
