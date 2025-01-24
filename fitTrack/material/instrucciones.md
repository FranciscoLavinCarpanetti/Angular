## App fitTrack ##

  1 - Instalar bootstrap en el proyecto:
        npm install bootstrap
  2 - Cargar bootstrap en angular.json:
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
  3 - Creamos el interface de ejercicio. Siempre el interfaz va en singular representa un ejercicio:
        ng g i interfaces/IExercise --type=interface
                - id?: number - opcional por que formulario no recoge.
                - title: string
                - quantity: number
                - weight: number
  4 - Creamos el servicio de ejercicios. El servicio es en plural por que representa a todas las funciones que podemos hacer con los datos de producto:
        ng g s services/exercises --skip-tests
                 - getAll() : IExercise[]
                 - insert(newEjercicio:IExercise) : any
  5 - Creamos los componetes necesario - 4 componentes:
                - formExercise
                   repeticiones no puede ser 0, y el peso tiene que ser entre 10 y 80 kg
                - exerciseList
                    - exercise
                - total
            ng g c componentes/subcarpeta/nombreComponente --skip-tests
            subcarpeta no es obligatoria.
