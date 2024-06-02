import { Component, Input } from '@angular/core';
import {MatProgressBarModule, ProgressBarMode} from '@angular/material/progress-bar';


@Component({
  selector: 'app-language-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './language-progress-bar.component.html',
  styleUrl: './language-progress-bar.component.scss'
})
export class LanguageProgressBarComponent {

color = 'accent';
mode: ProgressBarMode = 'determinate';
bufferValue = 0;

@Input() language = {
  language : '',
  percentage: 0,
}

}
