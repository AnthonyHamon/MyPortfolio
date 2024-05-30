import { Component } from '@angular/core';
import { SocialLinksBarComponent } from './social-links-bar/social-links-bar.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SocialLinksBarComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
