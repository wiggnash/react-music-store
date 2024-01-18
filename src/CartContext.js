// when we need data and functions that are necessary through the different part of the applications 

import { createContext, createContext, useState } from "react";
import { productsArray } from "./productsStore";

// ====== BLUE PRINT OF CONTEXT =======
/**
 * 1. context
 * 2. provider -> gives the react app access to all the things in your context
 */

//initilise the context by creating an object 
/**
 * 1. We dont define the functions right inside the create context , this context is saying that we can define a function for getproductquantity
 * when we create the getproductquantity function , we can pass that to the provider 
 */

// giving our application access to the context , we will export

export const createContext = createContext({
    items:[],
    getProductQuantity:() => {},
    addOneToCart:() => {},
    removeOneFromCart:() => {},
    deleteAllFromCart:() => {},
    getTotalCost:() => {}
});


// provider => anything inside the cartprodivder is the children
export function CartProvider({children}){
    const [cartProducts,setCartProducts] = useState([]); // we will udpate the setCardProducts array and then pass it as an item


    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if(quantity === undefined) return 0;

        return quantity;
    }
    
    const contextValue = {
        items:cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteAllFromCart,
        getTotalCost
    }
    return(
        <CartProvider value={contextValue}>
            {children}
        </CartProvider>
    )

}