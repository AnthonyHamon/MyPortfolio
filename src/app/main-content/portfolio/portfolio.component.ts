import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolio = [
    {
      projectName: 'Fantasia Adventure',
      projectPicture: 'assets/img/projects/fa-game-screen-console3.jpg',
      liveDemoLink: 'https://fantasia-adventure.anthony-hamon.com/',
      githubLink: 'https://github.com/AnthonyHamon/Fantasia-Adventures',
      usedTechnologies: 'JavaScript, HTML, CSS',
      projectDescription: 'A 2D Platform, jump and run adventure game mainly based on JavaScript and OOP. Be a Hero, collect items, beat all creatures and defeat the Boss using differents skills and save the World!',

    },
    {
      projectName: 'Join',
      projectPicture: 'assets/img/projects/join-phone.jpg',
      liveDemoLink: 'https://join.anthony-hamon.com/',
      githubLink: 'https://github.com/AnthonyHamon/Join-GruppenProjekt',
      usedTechnologies: 'Angular, TypeScript, CSS, Firebase',
      projectDescription: 'Log in and use this task manager app inspired by the Kanban System. Create, update and deletes your tasks. Assign them to users and organize your project between categories and status',

    },
    {
      projectName: 'Pokédex',
      projectPicture: 'assets/img/projects/pokedex-reverse.jpg',
      liveDemoLink: 'https://pokédex.anthony-hamon.com/',
      githubLink: 'https://github.com/AnthonyHamon/Pokedex',
      usedTechnologies: 'JavaScript, HTML, CSS, API',
      projectDescription: 'A library for all Pokémons. Obtain many Informations about the Pocket Monsters or search for a specific one. Based ond the PokéAPI',

    },
    {
      projectName: 'Portfolio',
      projectPicture: 'assets/img/projects/portfolio.jpg',
      liveDemoLink: 'https://anthony-hamon.com/',
      githubLink: 'https://github.com/AnthonyHamon/MyPortfolio',
      usedTechnologies: 'Angular, TypeScript, SCSS',
      projectDescription: 'A simple one Page portfolio to introduce myself and share my projects to potential client / company / recruiter.',

    },
    // {
    //   projectName: 'Simple CRM',
    //   projectPicture: 'assets/img/projects/portfolio.jpg',
    //   liveDemoLink: 'https://da-bubble.anthony-hamon.com/',
    //   githubLink: 'https://github.com/AnthonyHamon/MyPortfolio',
    //   usedTechnologies: 'Angular, Firebase',
    //   projectDescription: 'A very Simple Customer Relationship Management system working with CRUD functionality.',

    // }
  ]
}
