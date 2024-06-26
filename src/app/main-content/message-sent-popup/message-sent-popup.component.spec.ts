import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSentPopupComponent } from './message-sent-popup.component';

describe('MessageSentPopupComponent', () => {
  let component: MessageSentPopupComponent;
  let fixture: ComponentFixture<MessageSentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageSentPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageSentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
