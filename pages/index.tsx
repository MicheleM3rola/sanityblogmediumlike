
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../Components/header/Header'
import {sanityClient,urlFor} from "../sanity"
import {Post} from "../typings"

interface Props{
  posts:[Post]
}




const Home= ({posts}:Props) => {
  
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>My Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    <section className='flex justify-between items-center bg-orange-200 border-y border-black py-10 lg:py-0 '>
      <div className='px-10 space-y-5 py-12'>
        <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black decoration-4' >My Games</span> to play and share with you</h1>
        <h2>
          It's easy to share my adventures and what I discover with you, through a blog post.
        </h2>
      </div>
      <img className='hidden md:inline-flex h-32 lg:h-48 rounded-full mr-5' src='/michele.jpg' alt="logo"/>
      
     
    </section>
    {/**posts */}
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 p-2 md:p-6'>
        {
          posts.map((post)=>(
            <Link key={post._id} href={`/post/${post.slug.current}`} >
              <div className='group cursor-pointer border rounded-lg overflow-hidden'>
                <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out ' src={urlFor(post.mainImage).url()!} alt="post image"/>
                <div className='flex justify-between p-5 bg-white'>
                  <div>
                  <p className='text-lg font-bold'>{post.title}</p>
                  <p className='text-xs'>{post.description} by {post.author.name}</p>
                  
                  </div>
                  
                  <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt="author photo" />
                </div>
              </div>
            </Link>
          ))
        }
      </section>
    </div>
  )
}


export const getServerSideProps =async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;
const posts = await sanityClient.fetch(query);
return {
  props :{
    posts
  }
}
}




export default Home
