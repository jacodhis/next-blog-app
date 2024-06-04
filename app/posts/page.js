import AllPosts from "./client/page";

//create a method to fetch data

async function fetchAllProducts() {
    const response = await fetch('https://dummyjson.com/products', {
        method:'GET'
    })
  const result = await response.json()
  if (result && result.products && result.products.length) 
        return result.products

 

}
export default async function GetPosts() {
  const getAllProducts = await fetchAllProducts()
  // console.log("all products ",getAllProducts);
    return <AllPosts posts ={getAllProducts} />
}