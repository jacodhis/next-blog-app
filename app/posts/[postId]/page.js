import ShowPost from "@/components/posts/Show";

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