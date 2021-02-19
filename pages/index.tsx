import { Layout, BlogList, Card } from "@/components"

function Home() {
  return (
    <Layout hideFooter>
      <section className="mb-10">
        <h1 className="text-xl mb-5">Blog</h1>
        <BlogList />
      </section>

      <section className="mb-32">
        <h1 className="text-xl mb-5">Talks</h1>
        <Card
          date="4 July 2019"
          link="https://github.com/bodazhao/typescript-workshop"
          title="Get Started with TypeScript"
          preview="IBM CIO London Lunch & Learn"
        />
        <Card
          date="15 Nov 2015"
          link="https://prezi.com/quy4jfolakb8/stop-using-html-css/"
          title="Stop using HTML & CSS"
          preview="University of York Grand Tech Meetup"
        />
      </section>

      <section>
        <a href="https://github.com/bodazhao" className="mr-8">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/boda-zhao" className="mr-8">
          LinkedIn
        </a>
      </section>
    </Layout>
  )
}

export default Home
