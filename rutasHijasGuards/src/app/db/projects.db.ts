import { IProject } from "../interfaces/iproject.interface";

export const PROJECTS: IProject[] = [
  {
    id: 1,
    name: 'web',
    data: {
      description: 'Somos los mejores desarrolladores del mundo mundial',
      title: 'Desarrollo web agil y dinamico',
      clients: 25,
      numberProject: 45
    }
  },
  {
    id: 2,
    name: 'design',
    data: {
      description: 'Hacemos cositas bonitas y preciosas',
      title: 'Diseño corporativo y branding',
      clients: 15,
      numberProject: 100
    }
  },
  {
    id: 3,
    name: 'marketing',
    data: {
      description: 'Vendemos hielo a los esquimales',
      title: 'Marketing alto impacto',
      clients: 35,
      numberProject: 10
    }
  }
]
