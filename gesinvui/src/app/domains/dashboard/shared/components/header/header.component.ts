import { Component } from '@angular/core';
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
    sections : DropDown = 
      {
        title: "Home",
        items : [
          {
            title: "Prueba 1",
            icon: "local_shipping",
            url : "#"
          },
          {
            title: "Prueba 2",
            icon: "local_shipping",
            url : "#"
          }
        ]
      }
    ; 
}
