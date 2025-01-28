## APP directorio de usuarios.

      - Componentes: 5 componentes
            - Pagina:
                  - Home => /home ✅
                  - UsersList => /usuarios ✅
                  - UserView => /usuario/idUser ✅
            - Componentes:
                  - Header => con el menu de navegacion ✅
                  - UserCard => tarjeta de cada usuarios en la lista. ✅
      - Interfaces: 1 interfaz.  IUser ✅
                    - id number, 
                    - name string, 
                    - surname string, 
                    - email string, 
                    - phone string, 
                    - photo string  "https://randomuser.me/api/portraits/women/31.jpg"
                    - job string;
      - Servicios: 1 Servicio. UsersService ✅
                  - getAll => obtener todo el listado de usuarios ✅
                  - getById => obtener un usuario por su id ✅
                  - getByName => obtener un listado usuarios por su nombre. (Buscador)
                  - getByJob => obtener un listado de usuarios por su puesto de trabajo (Select)

      - Crear todos los componentes, servicios e interfaces en sus carpetas correspodientes.✅
      - Dar de alta los campos del interfaz✅
      - crear un array de usuarios con 10 registros ✅
      - crear los metodos del servicios listados arriba. ✅
      - Crear las rutas dentro del fichero routes que carguen los componentes pagina. ✅


  - TAREA 1: Cargar el menu dentro del componente header y que funcionen las rutas cargando los componentes especificos de cada router. ✅
  - TAREA 2: Cargar dentro del UserList todos los datos de mi lista de usuarios que estan en el servicio. Cargarlo en un grid de bootstrap que tenga 1 columna en movil, 2 en tablet y 3 en desktop (sm, md, xl) ✅
  - TAREA 3: Poner un boton de ver detalle en cada usuario, esto nos enviará a la ruta de de vista de usuario. ✅
            - Recuperaremos el id del usuario de la ruta o bien por ActivatedRouted o bien por @Input(), recordar que si usas este metodo tienes que modificar el app.config() => withComponentInputBinding() ✅
            - Cargaremos la información del usuario haciendo un peticion al servicio por ID. ✅
  - TAREA 4: En el componente userList crear un formulario que capture el nombre con un boton de buscar este recogerá el dato del formulario y buscará por nombre en el servicio. ✅
  - TAREA 5: Un selector con una lista de trabajos esta lista de trabajos la proporciona la BBDD.
  Tanto el componente de la tarea 4 y de la tarea 5 serán componente autonomos y solo recogeran datos de usuario comunicando al padre el resultado recogido a través de un output
