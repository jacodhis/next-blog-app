'use client'
import Button from "@/constants/reusables/button";
import Image from "next/image";

const ShowProduct = ({ post }) => {
    
    const handleAddToCart = () => {
        alert('am added to cart')
    }

    const productInfo = <div>
                            <Image src={post.images[0] } width={150} height={100}/>
                            <p> Product Name : {post.title}</p>
                            <p> Product Description : {post.description}</p>
                            <p> Product Price : {post.price}</p>
                            <Button onClick={handleAddToCart}> Add To cart </Button>
                        </div>
    
    if (!post) {
        return <p>No post details available.</p>;
    }

    return (
        <>
            {post && productInfo}
        </>
    );
}

export default ShowProduct