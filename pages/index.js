import Head from 'next/head'
import Image from 'next/image'
import { Inter, Praise } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Questions from '@/components/ Questions/ Questions'
import Answers from '@/components/Answers/Answers'
import Description from '@/components/Description/Description'
import Prices from '@/components/Prices/Prices'
import Azer from '@/components/Azer/Azer'
import Hero from '@/components/Hero/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      {/* <Questions/>
      <Answers/>
      <Description/>
      <Prices/>
      {<Azer/>} */}
    </>
  )
}
