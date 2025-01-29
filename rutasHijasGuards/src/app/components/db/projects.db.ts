import { IProjets } from "../../interfaces/iprojets.interface";

export const PROJECTS: IProjets[] = [
  {
    id: 1,
    name: 'web',
    data: {
      description: 'somos los mejores desarrolladores web',
      title: 'desarrolo web',
      clients: 25,
      numberProjects: 45,

    }
  },
  {
    id: 2,
    name: 'diseno',
    data: {
      description: 'somos los mejores disenando web',
      title: 'desarrolo diseno',
      clients: 15,
      numberProjects: 100,

    }
  },
  {
    id: 3,
    name: 'marketing',
    data: {
      description: 'somos los mejores en marketing web',
      title: 'desarrolo marketing',
      clients: 35,
      numberProjects: 10,

    }
  }
]
