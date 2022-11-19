import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({el , key}) {
  return ( 
    
    <Link href={`/post/${el.slug}`}>
    <li className="scrollbar-item">
    <div className="blog-card">

      <figure className="card-banner img-holder" >
        <Image src={el.coverImage.url} 

          alt="itself" className="img-cover"  layout='fill'/>

        <ul className="avatar-list absolute">

        

          <li className="avatar-item">
            
            <a  href="#" className="avatar img-holder" >
               <Image src={el.author.picture.url} width="100" height="100" loading="lazy" alt="Author"
                className="img-cover" />
            </a>
          
          </li>

        </ul>
      </figure>

      <div className="card-content">

        <ul className="card-meta-list">

        {el.tags.map((tag , i) => {
                        return(
                         <li key={i}>
                        <a  href="#" className="card-tag">{tag}</a>
                        </li>
                        )
                       })}

        </ul>

        <h3 className="h4">
          <a href="#" className="card-title hover:underline">
           {el.title}
          </a>
        </h3>

        <p className="card-text">
         {el.excerpt}
        </p>

      </div>

    </div>
  </li>
  </Link>
 
  )
}




