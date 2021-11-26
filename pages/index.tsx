import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts'

const Home: NextPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <Image src="/vercel.svg" width = {200} height = {200} alt="Home"/>
      <h1 className="title">Home Page</h1>
      <h1 className={styles['title']}>Dimas Dimyati</h1>
    </Layout>
  )
}

export default Home
