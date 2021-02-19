import { posts, formatDate } from "@/utils"
import { Card } from "./Card"

export const BlogList = () => {
  return (
    <section>
      {!!posts.length &&
        posts.map((post, i) => {
          const {
            path,
            module: { meta },
          } = post
          const props = {
            date: formatDate(meta.created),
            minutes: meta.reading_time,
            link: "/blog" + path,
            title: meta.title,
            preview: meta.preview,
          }

          return <Card key={i} {...props} />
        })}
    </section>
  )
}
