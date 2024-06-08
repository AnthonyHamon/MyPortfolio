import { animate, state, style, trigger, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  animations: [
    trigger('slideInOutAnimation', [
      state('open', style({
        width: '100%',
      })),
      state('closed', style({
        width: '40%',
      })),
      transition('open <=> closed', [
        animate('0.4s')
      ])
    ])
  ],
})
export class ProjectComponent {

  isOpen: boolean = false;

  @Input() odd = false;

  @Input() project = {
    projectName: 'Fantasia Adventure',
    projectPicture: 'asset/img/projects/f-a-gaming-display.png',
    liveDemoLink: '',
    githubLink: '',
    usedTechnologies: 'JavaScript, HTML, CSS',
  };

  @HostBinding('class.reverse-card') reverseCard = true;




toggleProjectDescription(){
  this.isOpen = !this.isOpen;
}

}
