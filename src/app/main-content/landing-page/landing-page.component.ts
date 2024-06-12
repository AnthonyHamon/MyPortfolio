import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, NgxTypedWriterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
