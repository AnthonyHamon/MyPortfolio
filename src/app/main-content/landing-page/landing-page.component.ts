import { Component } from '@angular/core';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgxTypedWriterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
