import React from 'react'
import Card from './Card'

export default function Cards({post}) {
    console.log(post)
  return (
    <section className="section  featured" aria-label="featured post">
    <div className="container">

      <p className="section-subtitle">
        Get started with our <strong className="strong">best stories</strong>
      </p>

      <ul className="has-scrollbar">


        {post.posts.map((el , i) =>{
            return (<Card el={el} key={i} />)
        })}

       

      </ul>

    </div>
</section>
  )
}
