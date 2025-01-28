export interface IResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: Iproduct[];
}

export interface Iproduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean;
}
