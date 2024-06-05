import ShowProduct from "@/components/products/Show";


export const metadata = {
    title: `single post`,
    description: "test product",
    keywords:["test product","product"]
  };


const fetchDetails = async (postId) =>{
    let url = `https://dummyjson.com/products/${postId}`
    const response = await fetch(url,{
        method:'GET'
    });
    const data = response.json();
    return data
}

const GetShowProduct = async ({params}) =>{
    const {productId} = params
    const postDetails = await fetchDetails(productId)

    return <ShowProduct post={postDetails}/>

}
export default GetShowProduct;