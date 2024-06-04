import Posts from '../../components/posts'
//create a method to fetch data

export const metadata = {
  title: "posts",
  description: "all posts",
  keywords:["my posts","posts"]
};

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
    return <Posts posts={getAllProducts} />
}