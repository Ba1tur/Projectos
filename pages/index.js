import Hero from '@/components/Hero/Hero'
import Head from "next/head";
import Image from "next/image";
import { Inter, Praise } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Work from "@/components/Work/Work";
import Coursework from "@/components/Coursework/Coursework";
import Reviews from "@/components/Reviews/Reviews";
import CourseworkOther from "@/components/CourseworkOther/CourseworkOther";
import Questions from "@/components/ Questions/ Questions";
import Answers from "@/components/Answers/Answers";
import Description from "@/components/Description/Description";
import Prices from "@/components/Prices/Prices";
import Azer from "@/components/Azer/Azer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Work />
      <Questions />
      <Coursework />
      <Prices />
      <Reviews />
      <Answers />
      <Description />
      <CourseworkOther />
      <Azer />
      {/* <Hero/> */}
      {/* <Questions/>
      <Answers/>
      <Description/>
      <Prices/>
      {<Azer/>} */}
    </>
  );
}
