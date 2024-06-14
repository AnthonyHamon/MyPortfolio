import {Component} from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent{

  portfolio = [
    {
      projectName: 'Fantasia Adventure',
      projectPicture: 'assets/img/projects/f-a-gaming-display.png',
      liveDemoLink: '',
      githubLink: 'https://github.com/AnthonyHamon/Fantasia-Adventures',
      usedTechnologies: 'JavaScript, HTML, CSS',

    },
    {
      projectName: 'Join',
      projectPicture: 'assets/img/projects/phone-hand.png',
      liveDemoLink: '',
      githubLink: 'https://github.com/AnthonyHamon/Join-GruppenProjekt',
      usedTechnologies: 'Angular, TypeScript, CSS, Firebase',

    },
    {
      projectName: 'Pokédex',
      projectPicture: 'assets/img/projects/pokedex-laptop-reverse.png',
      liveDemoLink: '',
      githubLink: 'https://github.com/AnthonyHamon/Pokedex',
      usedTechnologies: 'JavaScript, HTML, CSS, API',

    },
    {
      projectName: 'Simple CRM',
      projectPicture: 'assets/img/projects/laptop.png',
      liveDemoLink: '',
      githubLink: 'https://github.com/AnthonyHamon/MyPortfolio',
      usedTechnologies: 'Angular, Firebase',

    }
  ]
}
