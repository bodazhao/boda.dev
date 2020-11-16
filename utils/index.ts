import { ImportedPost } from "@/types";

function sortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

function importAll(r): ImportedPost[] {
  return r.keys().map((fileName) => {
    // from ./building-a-markdown-blog.mdx to /building-a-markdown-blog
    const path = fileName.substr(1).replace(/\.mdx$/, "");
    const module = r(fileName);

    return {
      path,
      module,
    };
  });
}

// https://webpack.js.org/guides/dependency-management/#requirecontext
export const posts = importAll(
  require.context("../pages/blog/", true, /\.mdx$/)
)
  .filter((o) => o.module.meta.status !== "draft")
  .sort((a, b) => sortDesc(a.module.meta.created, b.module.meta.created));

/**
 * @param dateString example: 2020-11-12T00:00:00.000
 * @returns return day month and optional year (if not this year)
 */
export const formatDate = (dateString) => {
  type Option = {
    day: string;
    month: string;
    year?: string;
  };

  const date = new Date(dateString);
  const isThisYear = date.getFullYear() === new Date().getFullYear();
  let option: Option = {
    day: "2-digit",
    month: "long",
  };

  if (!isThisYear) {
    option = {
      ...option,
      year: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-GB", option).format(new Date(dateString));
};
