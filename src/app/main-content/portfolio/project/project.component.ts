import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input() project = {
    projectName: 'Fantasia Adventure',
    projectPicture: 'asset/img/projects/f-a-gaming-display.png',
    liveDemoLink: '',
    githubLink: '',
    usedTechnologies: 'JavaScript, HTML, CSS',
  };
}
