'use client'


const AllPosts = (props) => {
  
  const { posts } = props

  const allPosts = <div>
      {posts && posts.length > 0 && posts.map((post) => {
        return <div key={post.id}>{ post.title }</div>
      })}
    </div>
  return <>
      {allPosts}
   </>
}

export default AllPosts;