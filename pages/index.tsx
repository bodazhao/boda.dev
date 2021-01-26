import { Layout, BlogList } from "@/components";

function Home() {
  return (
    <Layout>
      <h1 className="text-5xl mb-3">Projects</h1>
      <div className="mb-10">
        <p className="text-xl mb-2">
          <a href="/hackernews">Hacker News</a>
        </p>
      </div>

      <h1 className="text-5xl mb-3">Blog</h1>
      <BlogList />
    </Layout>
  );
}

export default Home;
