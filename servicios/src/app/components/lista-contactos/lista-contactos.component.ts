import { Component, inject } from '@angular/core';
import { IContacto } from '../../interfaces/icontacto.interface';
import { ContactosService } from '../../services/contactos.service';
import { ContactoComponent } from '../contacto/contacto.component';


@Component({
  selector: 'app-lista-contactos',
  imports: [ContactoComponent],
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.css'
})
export class ListaContactosComponent {
  listaContactos: IContacto[] = []
  //para inyectar una dependencia usamos la funcion inject()
  contactosService = inject(ContactosService)

  ngOnInit() {
    //cuando todo el componente este cargado quiero llenar mi array de datos del servicio.
    this.listaContactos = this.contactosService.getAll()
    console.log(this.listaContactos);
  }

}
