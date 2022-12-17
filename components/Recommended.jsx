import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Recommended({post}) {
  return (
    <section className="section max-w recommended" aria-label="recommended post">
        <div className="container">

          <p className="section-subtitle">
            <strong className="strong">Recommended</strong>
          </p>

          <ul className="grid-list">

           {post?.posts?.map((el , i ) => {
            return(
              <div key={i}>
              <Link href={`/post/${el?.slug}`} >
                <li>
                <div className="blog-card">
  
                  <figure className="card-banner img-holder" style={{width: 200 ,height: 260}}>
                    <Image src={el?.coverImage?.url} width="300" height="360" loading="lazy"
                      alt="done" className="img-cover" layout='fill' />
  
                    
                  </figure>
  
                  <div className="card-content">
  
                    <h3 className="h5">
                      <a href="#" className="card-title hover:underline">
                         {el?.title}
                      </a>
                    </h3>
  
                  </div>
  
                </div>
              </li>
              </Link>
              </div>
            )
           })}

           

           

          </ul>

        </div>
      </section>
  )
}
