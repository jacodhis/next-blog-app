//create a method to fetch data

import Products from "@/components/products";

export const metadata = {
  title: "products",
  description: "All Products",
  keywords:["test Products","Products"]
};
export default  async function  GetProducts() {

  const response  = await fetch( `http://localhost:3000/api/products`)
  if (!response.ok) {
    console.error("Failed to fetch products");
    return <div>Error loading products</div>;
  }
  const data = await response.json();

    return <Products products={data}/>
}