## App DataSphere

  1 - Instalar bootstrap en el proyecto
        npm install bootstrap
  2 - Cargar bootstrap en angular.json
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
  3 - Creamos el interface de user. Siempre el interfaz va en singular representa un producto
        ng g i interfaces/IUser --type=interface
                - id?: number - opcional por que formulario no recoge
                - name: string
                - lastname: string
                - correo: string
                - fecha: string
                - genero: string
                - direccion: string
                - red social: string
  4 - Creamos el servicio de users. El servicio es en plural por que representa a todas las funciones que podemos hacer con los datos de user
        ng g s services/users --skip-tests
                 - getAll() : IUser[]
                 - insert(newUser:IUser) : any
  5 - Creamos los componetes necesario - 4 componentes
                - formUser
                - userList
                    - user
                - total
            ng g c componentes/subcarpeta/nombreComponente --skip-tests
            subcarpeta no es obligatoria
