import { Component } from '@angular/core';
import { TechnologyComponent } from './technology/technology.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TechnologyComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    {
      name: 'Angular',
      image: 'angular.png',
      link: '',
    },
    {
      name: 'TypeScript',
      image: 'typescript.png',
      link: '',
    },
    {
      name: 'JavaScript',
      image: 'javascript.png',
      link: '',
    },
    {
      name: 'HTML',
      image: 'html.png',
      link: '',
    },
    {
      name: 'Firebase',
      image: 'firebase.png',
      link: '',
    },
    {
      name: 'GIT',
      image: 'git.png',
      link: '',
    },
    {
      name: 'CSS',
      image: 'css.png',
      link: '',
    },
    {
      name: 'Rest-Api',
      image: 'rest-api.png',
      link: '',
    },
    {
      name: 'Scrum',
      image: 'scrum.png',
      link: '',
    },
    {
      name: 'Material Design',
      image: 'material-design.png',
      link: '',
    },
  ]
}
