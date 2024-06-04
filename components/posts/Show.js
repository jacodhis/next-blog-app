const ShowPost = ({post}) =>{
    return (
        <div>
           <p> Product Name : {post.title}</p>
           <p> Product Description : {post.description}</p>
           <p> Product Price : {post.price}</p>
        </div>
    );
}

export default ShowPost