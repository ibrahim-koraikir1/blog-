import React from 'react'
import { getPostDetails, getPosts, slugs } from '../../client';

export default function PostDetails({post}) {
    console.log('helloooooo')
    console.log(post)
  return (
    <div> {post.title}</div>
  )
}





// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const {posts} = await getPosts(slugs());
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: true
  }
}