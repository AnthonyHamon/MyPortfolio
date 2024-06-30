import { Component, OnInit, Input } from '@angular/core';
import {slideInRightAnimation } from 'angular-animations';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-user-feedback',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './user-feedback.component.html',
  styleUrl: './user-feedback.component.scss',
  animations: [slideInRightAnimation({translate: '200%', duration: 2000})]
})

export class UserFeedbackComponent implements OnInit {


  ngOnInit(): void {
    this.slideInPopup();
    this.updateMessage();

  }

  @Input() positiveUserFeedback = false;

  animationState = false;
  animationWithState = false;

  messageSuccessfullySent = "your message was sent successfully";
  errorMessage = "your message couldn't be sent, please try again";

  slideInPopup() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
      this.animationWithState = !this.animationWithState;
    }, 1);
  }

  updateMessage() {
    if (this.positiveUserFeedback) {
      return this.messageSuccessfullySent;
    } else {
      return this.errorMessage
    }
  }

}
