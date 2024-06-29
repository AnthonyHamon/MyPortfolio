import { Component, OnInit, Input } from '@angular/core';
import { slideInRightAnimation } from 'angular-animations';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-user-feedback',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './user-feedback.component.html',
  styleUrl: './user-feedback.component.scss',
  animations: [slideInRightAnimation()]
})
export class UserFeedbackComponent implements OnInit{

  ngOnInit(): void {
    this.slideInPopup();
    this.updateMessage();
  }

 @Input() userFeedbackPopup = false;
 @Input () userFeedback = false;

  animationState = false;

  messageSuccessfullySent = "you're message was sent successfully";
  errorMessage = "you're message couldn't be sent, please try again";

  slideInPopup(){
    this.animationState = true;
    setTimeout(() => {
      this.animationState = false;
    }, 2000);
  }

  updateMessage(){
    console.log(this.userFeedback);
    if(this.userFeedback){
      return this.messageSuccessfullySent;
    } else{
      return this.errorMessage
    }
  }
  
}
