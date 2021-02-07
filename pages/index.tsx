import { Layout, BlogList } from "@/components";

function Home() {
  return (
    <Layout>
      <section className="mb-32">
        <h1 className="text-4xl font-bold mb-5">Projects</h1>

        <a
          href="/hackernews"
          className="text-xl mb-2 pl-3"
          style={{ borderLeft: "10px solid blue" }}
        >
          Hacker News (WIP)
        </a>
      </section>

      <section>
        <h1 className="text-4xl font-bold mb-3">Blog</h1>
        <BlogList />
      </section>
    </Layout>
  );
}

export default Home;
