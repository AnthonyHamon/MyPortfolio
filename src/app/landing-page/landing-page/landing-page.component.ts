import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/header/navbar/navbar.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
