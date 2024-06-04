import ShowPost from "@/components/posts/Show";


export const metadata = {
    title: `single post`,
    description: "all posts",
    keywords:["my posts","posts"]
  };


const fetchPostDetails = async (postId) =>{
    let url = "https://dummyjson.com/products/" +postId
    const response = await fetch(url,{
        method:'GET'
    });
    const data = response.json();
    return data
}

const GetPost = async ({params}) =>{
    const {postId} = params
    const postDetails = await fetchPostDetails(postId)

    return <ShowPost post={postDetails}/>

}
export default GetPost;