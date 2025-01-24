import { Component, Input } from '@angular/core';
import { IContacto } from '../../interfaces/icontacto.interface';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  @Input() miContacto!: IContacto
}
