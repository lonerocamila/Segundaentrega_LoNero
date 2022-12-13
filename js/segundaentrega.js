

//funcion para agregar productos 
alert ('what would you like to wear?')
function products(id, price, category){
    this.products = id;
    this.products = price;
    this.category = category;

}

const products1 = products ("mug cup", 10, home, true);
const products2 = products ('kindle', 500, technology, true);
const products3 = products ('glass',40,home, true);

console.log (products1);
console.log (products2);
console.log (products3);
//filtro de busqueda mediante un array de productos

const seleccionarProductos =
[
    {names: 'mug cup', price: 10, },
    {names: 'kindle', price:500 },
    {names: 'glass', price:40 },


];
let browseProduct 
prompt ('what do you want to search?')
    let parameter = input.search.value ((the) => the.names.includes('kindle'))
console.log (result)



let products;
//array de objetos
const products = [
  {
    names: "mug cup",
    price: 10,
    category: 'home',
  },
  {
    names: "kindle",
    price: 500,
    category: 'technology',
  },
  {
    names: "glass",
    price: 50,
    category: 'home',
  },
  
];


let result = products.filter (product => product.names.includes (parameter))
if(result.length >0){
  loadproducts (result)
}