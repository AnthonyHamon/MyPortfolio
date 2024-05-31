import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
  animations: []
})
export class TechnologyComponent {
  @Input()technology = {
    name: '',
    image:'',
    link:'',
  }; 
}
