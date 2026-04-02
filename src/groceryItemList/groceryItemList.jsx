import React from 'react'

export default function GroceryItemList() {
    const [groceryItems, setGroceryItems] = React.useState([
        { id: 1, name: 'Milk', price: 30 },
        { id: 2, name: 'Bread', price: 15 },
        { id: 3, name: 'Eggs', price: 12 },
        { id: 4, name: 'Rice', price: 50 },
        { id: 5, name: 'Beans', price: 30 },
        { id: 6, name: 'Vegetables', price: 15 },
        { id: 7, name: 'Oil', price: 12 },
        { id: 8, name: 'Masala Packets', price: 50 },
    ]);
    const [addtocart, setAddToCart] = React.useState([]);
    const [removefromcart, setRemoveFromCart] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [filters, setFilters] = React.useState({
        category: '',
        priceRange: '',
        brand: '',
    });
const [products, setProducts] = React.useState(groceryItems);
products.forEach(product => {
    if (filters.category && product.category !== filters.category) {
        return;}});
    


  addtocart.forEach(item => {
    if (!removefromcart.some(cartItem => cartItem.id === item.id)) {
        setTotalPrice(prevTotal => prevTotal + item.price);
    } else {
        setTotalPrice(prevTotal => prevTotal - item.price);
    }});


      removefromcart.push(addtocart);
      removefromcart.forEach((item)     =>  { {
        const index = addtocart.findIndex(cartItem => cartItem.id === item.id);
      }});  
      console.log(removefromcart);

      addtocart.splice(addtocart.findIndex(cartItem => cartItem.id === item.id), 1);
console.log(addtocart);

       

  return (
    <>
      <h1>Grocery List</h1>
      
     
      <ul>
        All Category: <select value={filters.category} onChange={(e) => setFilters({...filters, category: e.target.value})}>

                     <option value="grocery">Grocery</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home</option>
                </select>
       
        {groceryItems.map(item => (
          <li key={item.id}>
            {item.name}: ${item.price.toFixed(2)} 
              <button onClick={() => setAddToCart([...addtocart, item.id])}>
            Add to Cart
          </button>
          <span>
            <button onClick={() => setRemoveFromCart([...removefromcart, item])}>
              Remove from Cart
            </button>
          </span>
          
          </li>
          
        
        ))}
      </ul>
   


    </> 
  )
}
