import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserFeedbackComponent } from '../user-feedback/user-feedback.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UserFeedbackComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  userFeedbackPopup = false;
  userFeedback = false;

  checked= false;


  contactData = {
    name: '',
    email: '',
    message: '',
  }



  mailTest = true; 

  post = {
    endPoint: 'https://anthony-hamon.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    console.log(ngForm)
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('response is', response);
            this.userFeedback = true;
            this.showUserFeedbackPopup(ngForm);
          },
          error: (error) => {
            console.error(error);
            this.showUserFeedbackPopup(ngForm);
          },
          complete: () => console.info('send post complete'),
        });
    }
    //  else if (ngForm.submitted && this.mailTest) {
    //   this.userFeedback = true;
    //   this.showUserFeedbackPopup(ngForm);

    // }
  }


  showUserFeedbackPopup(ngForm: NgForm) {
    this.userFeedbackPopup = true;
    setTimeout(() => {
      this.userFeedbackPopup = false;
      ngForm.resetForm();
    }, 2000);
  }

}


