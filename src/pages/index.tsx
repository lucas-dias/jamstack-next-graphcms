import { GetServerSideProps } from "next"
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Pricing } from '../components/Pricing'
import { usePageQuery, PageDocument } from "../generated/graphql"
import { client, ssrCache } from "../lib/urql"

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: 'about'
    }
  })

  return (
    <>
      <Hero title={data.page.title} subtitle={data.page.subtitle} />
      <Features />
      <Pricing />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, {slug: 'about'}).toPromise();
  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}