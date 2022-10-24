import { getPosts, getRecentPosts } from '../client'
import Head from 'next/head'
import Image from 'next/image'




import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Rexent from '../components/Rexent'
import Recommended from '../components/Recommended'
import Newsletter from '../components/Newsletter'


export default function Home({ posts , RecentPosts  }) {
  
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      

      <main >
        <article>
          <Hero/>
          <Cards post={posts}/>
          <Rexent post={RecentPosts }/>
          <Recommended post={posts}/>
          <Newsletter/>
        </article>
      </main>

   

    </div>
  )
}


export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const RecentPosts = (await getRecentPosts()) || [];
  return {
    props: { posts , RecentPosts  },
  };
}
