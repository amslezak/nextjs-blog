import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home className="container">
      <Head>
        <title> {siteTitle} </title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Andy Slezak!</p>
        <p>
          I enjoy learning, teaching, and turning ideas into reality. Welcome
          and join along with coding experiments!
        </p>
      </section>
      <section className={`${utilStyles.headerMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
                <br />
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}
