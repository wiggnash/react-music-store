import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productsStore";


// giving our application access to the context , we will export
export const CartContext = createContext({
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

    function addOneToCart(id){
        const quantity = getProductQuantity(id);

        if(quantity === 0){// no objects is there in the cart
            // setting the cart products to the array of elements , with the previous products plus the new object with the quantity 1
            setCartProducts(
                [
                    ...cartProducts, // take all the objects in the cart and put them in front of the array
                    {
                        id:id,
                        quantity:1
                    }
                ]
            )
        }else{ //product is in cart
            setCartProducts(

                // we are going to go through every single product of the cart products
                cartProducts.map(
                    product => product.id === id ? {...product,quantity:product.quantity+1} : product
                )
            )
        }
    }

    function removeOneFromCart(id){

        const quantity = getProductQuantity(id);

        if(quantity === 1){
            deleteAllFromCart(id);
        }else{
            setCartProducts(

                // we are going to go through every single product of the cart products
                cartProducts.map(
                    product => product.id === id ? {...product,quantity:product.quantity-1} : product
                )
            )
        }

    }

    // delete all the quantity of certain ID
    // filter -> start with [] if an object meets a condition , add the object to the array
    function deleteAllFromCart(id){
        setCartProducts(
            // add all the products to the array except the product we want to delete
            cartProducts => cartProducts.filter(
                currentProduct => {
                    return currentProduct.id !== id;
                }
            )
        )
    }

    function getTotalCost(){
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id)
            totalCost += (productData.price * cartItem.quantity)
        })

        return totalCost;
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
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;