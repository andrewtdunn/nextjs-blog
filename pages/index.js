import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData} from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home( { allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>What's Good! I like to eat pizza, play piano and watch LSU football.</p>
        <p>
          (This is a sample website, you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial.</a>)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padd1px}`}>
        <h2 className={utilStyles.headingMd}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, data, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {data}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}