export interface IUser {
  id?: number;
  nombre: string;
  email: string;
  edad: number;
  dni: string;
  profesion: string;
  password: string;
  repitepassword?: string;
}
