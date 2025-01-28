## APP http

        1 - Creamos tres rutas
                /home => homeComponent
                /productos => productosComponent
                ** => notFound
        2 - Vamos a crear el interfaz de producto y response
                - IProduct
                - IResponse
        3 - Vamos a crear un servicio - productsService
        4 - En el servicio hacermos peticiones http
                  - en app-config.ts cargamos en el array providers el provideHttpClient()
                  - inyectamos en el servivo el HTTPClient
                  - Creamos los metodos
                  - Convertimos en promesas con las firstValueFrom
        5 - Componente producto vamos a llamar al servicio y gestionar las peticiones asincronas con async await o bien then catch
        6 - Crear un componente productCard pasarle los datos del @for y cargar los datos del producto. 
        //HOMEWORK
        7 - Consiste en pintar solo aquellos productos que estan activos
        8 - crear un ruta de vista de producto /product/:_id que cargue un componente productView.
            - Capturamos el id del producto en la url
            - llamamos al servicios metodo getById
            - gestionamos la asincronica
            - pintamos el producto.
            - Boton que me permite volver al listado.
