'use client';
import classes from './posts.module.css'
import Link from 'next/link';

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Link href={`posts/${post.id}`} key={post.id} >
        <div className={classes.content}>
            {post.title}
        </div>
           
        </Link>
      ))}
    </div>
  );
};

export default Posts;
