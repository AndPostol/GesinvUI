import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DropdownComponent } from '@shared/components/forms/dropdown/dropdown.component';
import { DropDown } from '@shared/models/forms/dropDown.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() statusAside!: boolean;
  @Output() buttonMenu = new EventEmitter();

  clickMenu(){
    this.buttonMenu.emit();
  }
}
