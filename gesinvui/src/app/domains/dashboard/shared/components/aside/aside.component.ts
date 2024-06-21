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
      title: "Home"
    },  
    {
      title: "Productos",
      items : [
        {
          title: "Ver todo",
          icon: "local_shipping",
          url : "#"
        },
        {
          title: "Nuevo Producto",
          icon: "local_shipping",
          url : "#"
        },
        {
          title: "Ingreso",
          icon: "local_shipping",
          url : "#"
        },
        {
          title: "Salida",
          icon: "local_shipping",
          url : "#"
        }
      ]
    },
    {
      title: "Ordenes de compra",
      items : [
        {
          title: "Ver todo",
          icon: "local_shipping",
          url : "#"
        },
        {
          title: "Nueva orden compra",
          icon: "local_shipping",
          url : "#"
        }
      ]
    },
    {
      title: "Informes",
      items : [
        {
          title: "Ingresos",
          icon: "local_shipping",
          url : "#"
        },
        {
          title: "Salida",
          icon: "local_shipping",
          url : "#"
        },
        {
          title: "Proveedores",
          icon: "local_shipping",
          url : "#"
        },
        {
          title: "Kardex",
          icon: "local_shipping",
          url : "#"
        }
      ]
    },
    {
      title: "Proveedores",
      items : [
        {
          title: "Ver Proveedores",
          icon: "local_shipping",
          url : "#"
        },
        {
          title: "Nuevo Proveedor",
          icon: "local_shipping",
          url : "#"
        }
      ]
    },
    {
      title: "Pedidos"
    }
  ]; 
}
