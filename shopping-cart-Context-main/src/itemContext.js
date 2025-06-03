import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModal";

export const itemContext = createContext();

function useValue(){
    const value = useContext(itemContext);
    return value
}


function CustomContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false)
    const [cart, setCart] = useState([])

  const handleAdd = (prod) => {
    const index = cart.findIndex((item)=>item.id === prod.id)

    if(index === -1){
        setCart([...cart, {...prod, qty:1}])
        setTotal(total+prod.price)
        setItem(item+1)

    }else{
        cart[index].qty++
        setCart(cart)
        setTotal(total+cart[index].price)
        setItem(item+1)
    }
  };

  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1){
        cart[index].qty--;
        setItem(item-1)
        setTotal(total-cart[index].price);
        if(cart[index].qty === 0){
            cart.splice(index,1);
        }
    }
    setCart(cart)
   
  };
 

 function handleReset(){
    setTotal(0)
    setItem(0)
    setCart([])
  } 

  function clear(){
     setCart([])
  }
  
  const toggleCart=()=>{
    setShowCart(!showCart)

  }
    return(
        <itemContext.Provider value={{total, item, clear, handleAdd, handleRemove,handleReset, toggleCart, cart}}>
            {showCart&& <CartModal/>}
            {children}
        </itemContext.Provider>
    )
}
export {useValue}
export default CustomContext



