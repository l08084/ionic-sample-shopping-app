export interface Product {
  id: string;
  name: string;
  price: number;
  type: number;
  imagePath: string;
  commentOne: string;
  commentTwo: string;
  quantity: number;
}

export const enum PRODUCT_TYPE {
  tops = 0,
  jacket = 1
}
