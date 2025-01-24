import { Component } from '@angular/core';
import { IContact } from '../../interfaces/icontact.interface';

@Component({
  selector: 'app-arroba-for',
  imports: [],
  templateUrl: './arroba-for.component.html',
  styleUrl: './arroba-for.component.css'
})
export class ArrobaForComponent {
  arrNumeros: number[] = [1, 34, 4, 53, 3, 66, 34, 78, 7, 4, 3, 254, 7]

  arrContactos: IContact[] = [
    { id: 1, name: 'Juan', phone: 12345678 },
    { id: 2, name: 'Maria', phone: 34563456 },
    { id: 3, name: 'Raquel', phone: 87567678 },
    { id: 4, name: 'Rodrigo', phone: 76435365 },
    { id: 5, name: 'Pablo', phone: 12435454 },
    { id: 6, name: 'Cristina', phone: 45432333 },
  ]
}
