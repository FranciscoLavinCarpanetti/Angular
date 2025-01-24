import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IContacto } from '../../interfaces/icontacto.interface';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  nuevoContacto: IContacto = { name: "", phone: "" };
  contactosService = inject(ContactosService);


  capturarDatos() {
    if (this.nuevoContacto.name !== "" && this.nuevoContacto.phone !== "") {
      // si ya tengo el contacto nuevo enviarlo al servicio, para usar el servicio aqui tengo que inyectarlo.
      let msg = this.contactosService.insert(this.nuevoContacto);
      alert(msg)
      if (msg === "Usuario registrado") {
        // tengo que inicializar de nuevo el contacto
        this.nuevoContacto = { name: "", phone: "" };
      }
    } else {
      alert('Los campos no puede ser vacios')
    }
  }
}
