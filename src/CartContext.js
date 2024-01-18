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
 */
const createContext = createContext({
    items:[],
    getProductQuantity:() => {},

});
