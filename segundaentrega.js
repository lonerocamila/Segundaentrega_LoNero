

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
    const result = buy.filter ((the) => the.names.includes('kindle'))
console.log (result)



let vehiculo;
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

let ChooseQuantity ;
let total = 0
let price
SelectProducts = Number(prompt("1-Cup $10 2-Glass $50 3-Kindle $500 4-Buda $60 0-Exit"))

while (
    SelectProducts != "0") {
    switch (
        SelectProducts
    ) {
        case 1:
            ChooseQuantity = Number(prompt("the product is a cup, indicate quantity"))
            price = 10
            total = funcionTotal(ChooseQuantity , price)
            break;


        case 2:
            ChooseQuantity  = Number(prompt("the product is a glass, indicate quantity"))
            price = 50
            total = funcionTotal(ChooseQuantity , price)
            break;


        case 3:
            ChooseQuantity  = Number(prompt("the product is Kindle, indicate quantity"))
            price = 500
            total = funcionTotal(ChooseQuantity , price)
            break;
        case 4:
            ChooseQuantity  = Number(prompt("the product is a Buda, indicate quantity"))
            price = 60
            total = funcionTotal(ChooseQuantity , price)
            break;
        default:
            alert("You didn't select any of the options");
        }
    alert("the total purchase is: $" + total)
    alert("What do you want to wear?")
    
    SelectProducts = Number(prompt("1-Cup $10 2-Glass $50 3-Kindle $500 4-Buda $60 0-Exit"))
}

