import { animate, state, style, trigger, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, PortfolioComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})


export class ProjectComponent {

  constructor() {
  }

  @Input() firstProject = false;
  @Input() odd = false;
  @Input() project = {
    projectName: 'Fantasia Adventure',
    projectPicture: 'asset/img/projects/f-a-gaming-display.png',
    liveDemoLink: '',
    githubLink: '',
    usedTechnologies: 'JavaScript, HTML, CSS',
    projectDescription: '',
  };

}
