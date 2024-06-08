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
      language: 'english',
      percentage: 75,
    },
    {
      language: 'german',
      percentage: 85,
    },
    {
      language: 'french',
      percentage: 100,
    },
  ]
}
