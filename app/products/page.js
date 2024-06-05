//create a method to fetch data

import Products from "@/components/products";

export const metadata = {
  title: "posts",
  description: "all Products",
  keywords:["test Products","Products"]
};

async function fetchAllProducts() {
    const response = await fetch('https://dummyjson.com/products', {
        method:'GET'
    })
  const result = await response.json()
  if (result && result.products && result.products.length) 
        return result.products

}
export default async function GetProducts() {
  const getAllProducts = await fetchAllProducts()
    return <Products products={getAllProducts} />
}