import { Component, OnInit } from '@angular/core';
import { TechnologyComponent } from './technology/technology.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TechnologyComponent, TranslateModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit{

  currentLanguage: string;

  constructor(private translate:TranslateService){
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event) =>{
      this.currentLanguage = event.lang;
    })
  }


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
  ];
}
