import Link from "next/link";

import { posts, formatDate } from "@/utils";
import { ImportedPost } from "@/types";

const Card = ({ post }: { post: ImportedPost }) => {
  const {
    path,
    module: { meta },
  } = post;

  return (
    <div className="flex items-baseline mb-10">
      <p className="text-sm text-gray-700 mb-2 mr-3 lg:mr-10">
        {formatDate(meta.created)}
      </p>

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
