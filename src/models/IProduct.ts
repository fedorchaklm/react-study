export interface IProduct {
    id: number;
    title: string;
    description:  string;
    category:  string;
    price: number;
    "discountPercentage": number;
    "rating":  number;
    "stock": number;
    thumbnail:  string;
    "images":  Array<string>;
}
