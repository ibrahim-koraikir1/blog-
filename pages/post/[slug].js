import React from 'react'
import { getPostDetails, getPosts, slugs } from '../../client';
import {RichText} from '@graphcms/rich-text-react-renderer'
import { FacebookShareButton ,
  EmailShareButton ,
  LinkedinShareButton ,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  EmailIcon
} from 'react-share'
export default function PostDetails({post}) {
 
  
  return (
    <div className=''>
    <div className='details section'>

     
      <div className='title-details'>
        {post.title}
      </div>
      <div className='auhtor-details'>
        <p className='date'>
          <span> Last Updated</span>
          
          <span>{post.date}</span>
          </p>
          <div className='avatar img-holder'>
        <img  src={post.coverImage.url} className="img-cover" width="100" height="100" loading="lazy" alt="Author"/>
        </div>
        <p className='auhtor-name'>

        <span> Written By</span>
          
          <span>{post.author.name}</span>
         
        </p>
      </div>
      <div className='post'>
       
         <RichText content={post.content.raw.children} />
        
      </div>
      
      
       <div className='share'>
        < FacebookShareButton url={"cool"}>
        <FacebookIcon/>
        </FacebookShareButton>
        <EmailShareButton url={"cool"}>
          <EmailIcon/>
        </EmailShareButton>
        <LinkedinShareButton url={"cool"}>
          <LinkedinIcon/>
        </LinkedinShareButton>
        <TwitterShareButton url={"cool"}>
          <TwitterIcon/>
        </TwitterShareButton>
      </div>
    </div>
    
    </div>
    
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