const productsArray = [
    {
        id:"1",
        title:"Kendrick",
        price:100
    },

    {
        id:"2",
        title:"Drake",
        price:200
    },

    {
        id:"3",
        title:"J Cole",
        price:300
    }
]

// get the data with the help of the id
// ==> when we want to know the title and the price of some product when only the ID is known 

function getProductData(id){
    // .find() will allow us to loop through every element inside the array

    // -> current element this is looping through is called product 
    let productData = productsArray.find(product => product.id === id);

    // if the id is not present
    if(productData == undefined){
        console.log("The ID is not there in the list: "+id);
        return undefined;
    }
    
    return productData;
}
export { productsArray , getProductData};
