import { Component, signal } from '@angular/core';
import { DropdownComponent } from '@shared/components/forms/dropdown/dropdown.component';
import { DropDown} from "@shared/models/forms/dropDown.model";

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  sections : Array<DropDown> = [
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
  ]; 
}
