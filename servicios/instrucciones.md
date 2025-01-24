## APP Contactos Agenda

  1 - Creamos los componente necesarios
          - form
          - listaContactos
          - contacto
      ng g c components/nombreComponent  --skip-tests

  2 - Creamos el interfaz de contacto. Siempre en singular
            - id, name, phone 
      ng g i interfaces/IContacto --type=interface

  3 - Creamos el servicio de contactos
        - siempre se crea un servicio en plural
        - Dentro del servicio creamos un array con 5 contactos
    ng generate service services/contactos --skip-tests
    ng g s services/contactos --skip-tests
