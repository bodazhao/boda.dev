import Link from "next/link";

import { posts, formatDate } from "@/utils";
import { ImportedPost } from "@/types";

const Card = ({ post }: { post: ImportedPost }) => {
  const {
    path,
    module: { meta },
  } = post;

  return (
    <div className="flex mb-10">
      <div className="text-gray-700 mt-2 lg:mt-4 mr-3 lg:mr-10">
        <p className="text-sm mb-2">{formatDate(meta.created)}</p>
        <p className="text-xs text-right">{meta.reading_time} minutes</p>
      </div>

      <div className="flex-1">
        <Link href={"/blog" + path}>
          <a className="text-xl font-bold md:text-3xl">{meta.title}</a>
        </Link>
        <p className="text-gray-700 pt-1">{meta.preview}</p>
      </div>
    </div>
  );
};

export const BlogList = () => {
  return (
    <section>
      {!!posts.length &&
        posts.map((post, i) => {
          return <Card key={i} post={post} />;
        })}
    </section>
  );
};
