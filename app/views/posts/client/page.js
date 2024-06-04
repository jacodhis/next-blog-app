'use client'

import Navbar from "../../navbar/page";

const AllPosts = (props) => {
  
  console.log(props)
  
  const { posts } = props

  const allPosts = <div class="d-flex gap-4">
      {posts && posts.length > 0 && posts.map((post) => {
        return <div key={post.id}>{ post.title }</div>
      })}
    </div>
  return <>
    <Navbar />
      {allPosts}
   </>
}

export default AllPosts;