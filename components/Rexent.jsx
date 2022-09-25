import React from 'react'

export default function Rexent({post}) {
   
  return (
    <section className="section recent" aria-label="recent post">
        <div className="container">

          <div className="title-wrapper">

            <h2 className="h2 section-title">
              See the <strong className="strong">Lately Blog</strong>
            </h2>

            

          </div>
          <ul className="grid-list scrool">
          {post.posts.map((el , i) => {
            return (
                

                <li>
                  <div className="blog-card">
    
                    <figure className="card-banner img-holder" >
                      <img src={el.coverImage.url} width="550" height="660" loading="lazy"
                        alt="Creating is a privilege but it’s also a gift" className="img-cover" />
    
                      <ul className="avatar-list absolute">
    
                        
    
                        <li className="avatar-item">
                          <a href="#" className="avatar img-holder" >
                            <img src={el.author.picture.url} width="100" height="100" loading="lazy" alt="Author"
                              className="img-cover" />
                          </a>
                        </li>
    
                      </ul>
                    </figure>
    
                    <div className="card-content">
    
                      <ul className="card-meta-list">
    
                        <li>
                          <a href="#" className="card-tag">{el.tags}</a>
                        </li>
    
                        <li>
                          <a href="#" className="card-tag">People</a>
                        </li>
    
                        <li>
                          <a href="#" className="card-tag">Review</a>
                        </li>
    
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
    
             
    
    
            
            )
          })}
            </ul>

          <button className="btn">Load more</button>

        </div>
      </section>
  )
}
