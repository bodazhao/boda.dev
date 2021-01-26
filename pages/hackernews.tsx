import { Layout } from "@/components";
import db from "@/data/hackernews.json";

/**
 * get top X stories from each day, e.g 1, 3, 5, 10 up to 30
 */
function getTopStoryOf(num) {
  return db.map(({ the_day, stories }) => ({
    the_day,
    stories: [
      stories.sort((a, b) => {
        return parseInt(b.score) - parseInt(a.score);
      })[num - 1],
    ],
  }));
}

const top1Story = getTopStoryOf(1);

function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-3">2020</h1>

      <div className="pr-1">
        {top1Story.map(({ the_day, stories }) => {
          const comments = `https://news.ycombinator.com/item?id=${stories[0].id}`;
          const hasNoLink = stories[0].url === null;
          // url can be external link or HN thead
          const url = hasNoLink ? comments : stories[0].url;

          return (
            <div key={the_day} className="flex flex-wrap mb-3">
              <p className="mr-3 text-gray-400">
                {the_day.split("-").slice(1).join("-")}
              </p>

              <a href={url} className="mr-2 flex-1">
                {stories[0].title}
              </a>

              {!hasNoLink && (
                <a href={comments} className="text-2xl">
                  💬
                </a>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Home;
