import { Layout } from "@/components";
import db from "@/data/hackernews.json";

/**
 * sort stories (by scores) from each day
 */
const topStories = db.map(({ the_day, stories }) => ({
  the_day,
  stories: stories.sort((a, b) => parseInt(b.score) - parseInt(a.score)),
}));

function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-3">2020</h1>

      <div className="pr-1">
        {topStories.map(({ the_day, stories }) => {
          const topStory = stories[0];
          const comments = `https://news.ycombinator.com/item?id=${topStory.id}`;
          const hasNoLink = topStory.url === null;
          // url can be external link or HN thead
          const url = hasNoLink ? comments : topStory.url;

          return (
            <div
              key={the_day}
              className="flex flex-wrap items-center mb-3"
              style={{ minHeight: "32px" }}
            >
              <input type="checkbox" className="mr-2 md:mr-3" />

              <a href={url} className="flex-1">
                {topStory.title}
              </a>

              <a
                href={comments}
                className="text-gray-400"
                style={{ borderBottom: "1px dotted orange" }}
              >
                {the_day.split("-").slice(1).join("-")}
              </a>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Home;
