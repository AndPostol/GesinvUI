import { Component, Input, signal } from '@angular/core';
import { DropDown } from '@shared/models/forms/dropDown.model';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  toogleActive = signal(true);
  @Input() dropDown!: DropDown;
  @Input() bgHover!: string;
  toogleSubMenu(){
    this.toogleActive.update(prevState => !prevState);
  }
}
