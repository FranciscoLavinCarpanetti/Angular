export interface Iproduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  department: string;
  stock: number;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}
