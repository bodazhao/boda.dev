import { ImportedPost } from "@/types"

function sortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

function importAll(r): ImportedPost[] {
  return r.keys().map((fileName) => {
    // from ./building-a-markdown-blog.mdx to /building-a-markdown-blog
    const path = fileName.substr(1).replace(/\.mdx$/, "")
    const module = r(fileName)

    return {
      path,
      module,
    }
  })
}

// https://webpack.js.org/guides/dependency-management/#requirecontext
export const posts = importAll(
  require.context("../pages/blog/", true, /\.mdx$/)
)
  .filter((o) => o.module.meta.status !== "draft")
  .sort((a, b) => sortDesc(a.module.meta.created, b.module.meta.created))

/**
 * @param dateString example: 2020-11-12T00:00:00.000
 * @returns return format e.g 11 Nov 2020
 */
export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString))
}
