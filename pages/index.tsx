import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/heaser'

const Home: NextPage = () => {
  return (
    <div className="min-h-creen">
      <Header/>
      <div className='mt-10'></div> 
      <div className='mt-20'></div> 
    </div>
  )
}



export default Home
