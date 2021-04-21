export interface IProduct {
    id: number;
    name: string;
    quantity: number;
    price: number
    Img: string
}

export interface ICategroy {
    id: number;
    name: string;
}

export enum DiscountOffers {
   NoDisscount = "NoDisscount" ,
   tenPrecent = 10,
   fifftenPrecent = 15 
}

