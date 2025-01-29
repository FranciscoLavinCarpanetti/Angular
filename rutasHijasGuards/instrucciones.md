## app rutas hijas y guards

      1 - RUTAS:
              /home => HomeComponent
              /proyectos => ProyectsComponent
                    /proyectos/web => WebComponent
                    /proyectos/marketing => MarketingComponent
                    /proyectos/design => designComponent
      2 - Componentes:
                - Home
                - Projects
                    - Web
                    - Marketing
                    - Design
                - Header
                - NavProjects
      3 - Interfaces:
                - IProject
                    - id: number
                    - name: string
                    - data: IData
                - IData
                    - descripcion:
                    - title:
                    - clients:
                    - numberProyect
      4 - Servicios:
                - ProjectsServices
                      - getAll()
                      - getById(id:number)
                             