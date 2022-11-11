export interface Product {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  price: number;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  password: string;
}
