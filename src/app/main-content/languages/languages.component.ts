import { Component } from '@angular/core';
import { LanguageProgressBarComponent } from './language-progress-bar/language-progress-bar.component';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [LanguageProgressBarComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  languages = [
    {
      language: 'English',
      percentage: 75,
    },
    {
      language: 'German',
      percentage: 85,
    },
    {
      language: 'French',
      percentage: 100,
    },
  ]
}
