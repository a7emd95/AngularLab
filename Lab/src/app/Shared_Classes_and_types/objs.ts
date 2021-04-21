import { ICategroy } from '../Shared_Classes_and_types/utlites';
import { IProduct } from '../Shared_Classes_and_types/utlites';

var c1 : ICategroy= {
    id:  1 ,
    name:  "Cat 1 "
}
var c2 : ICategroy = {
    id: 2 ,
    name:  "Cat 2 "
}
var c3 : ICategroy  = {
    id: 3 ,
    name:"Cat 3 "
}
var c4 : ICategroy  = {
    id: 4 ,
    name:"Cat"
}
export var arrcat : Array<ICategroy> = [c1 , c2 , c3 , c4] 

var p1 : IProduct = {

    id:  1 , 
    name: "Product 1",
    quantity: 6 ,
    price: 100 , 
    Img: "img"
}  

var p2 : IProduct = {

    id:  2 , 
    name: "Product 2",
    quantity: 6 ,
    price: 100 , 
    Img: "img"
}
var p3 : IProduct = {

    id:  3 , 
    name: "Product 3",
    quantity: 6 ,
    price: 100 , 
    Img: "img"
}
var p4 : IProduct = {

    id:  4 , 
    name: "Product 4",
    quantity: 6 ,
    price: 100 , 
    Img: "img"
}
var p5 : IProduct = {

    id:  5 , 
    name: "Product 5",
    quantity: 6 ,
    price: 100 , 
    Img: "img"
}

export var arrprod : Array<IProduct > = [p1 , p2 , p3  , p4 , p5 ] 
