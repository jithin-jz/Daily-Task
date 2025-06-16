// sort the following array of object by price(ascending)
// find the total price

const Products = [
    {name:'A',price:200},
    {name:'B',price:100},
    {name:'C',price:150},
    {name:'D',price:200}
];


// for(p in Products){
//     console.log(p)
// }
let sortProduct =  Products.sort((a,b)=>a.price-b.price)
console.log(sortProduct)

let sum = sortProduct.reduce((a, b) => a + b.price, 0);
console.log(sum);
