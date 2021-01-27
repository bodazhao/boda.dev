import { useState } from "react"

import { Layout } from "@/components"
import db from "@/data/hackernews.json"

/**
 * sort stories (by scores) from each day
 */
let topStories = db.map(({ the_day, stories }) => ({
  the_day,
  stories: stories.sort((a, b) => parseInt(b.score) - parseInt(a.score)),
}))

if (typeof window !== "undefined") {
  if (window.localStorage.getItem("hnList")) {
    // exclude stories from existing localStorage row
    topStories = topStories.filter(
      (e) => !window.localStorage.getItem("hnList").includes(e.the_day)
    )
  }
}

function checkDay(day) {
  // avoid SSR :/
  if (typeof window !== "undefined") {
    const hnList = window.localStorage.getItem("hnList")

    if (hnList) {
      const hnListSet = new Set(JSON.parse(hnList))

      if (hnListSet.has(day)) {
        hnListSet.delete(day)
      } else {
        hnListSet.add(day)
      }

      const stringToSave = JSON.stringify(Array.from(hnListSet))
      window.localStorage.setItem("hnList", stringToSave)
      return window.localStorage.getItem("hnList")
    } else {
      window.localStorage.setItem("hnList", JSON.stringify([day]))
      return window.localStorage.getItem("hnList")
    }
  }
}

function Home() {
  const [stories, setStories] = useState(topStories)

  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="flex-1 text-2xl font-bold mb-3">2020</h1>
        <span className="inline">n = {stories.length}</span>
      </div>

      <div className="pr-1">
        {stories.map(({ the_day, stories }) => {
          const topStory = stories[0]
          const comments = `https://news.ycombinator.com/item?id=${topStory.id}`
          const hasNoLink = topStory.url === null
          // url can be external link or HN thead
          const url = hasNoLink ? comments : topStory.url

          return (
            <div
              key={the_day}
              className="flex flex-wrap items-center mb-3"
              style={{ minHeight: "32px" }}
            >
              <input
                type="checkbox"
                className="mr-2 md:mr-3"
                onClick={() => {
                  const checkedStories = checkDay(the_day)
                  setStories((prev) =>
                    prev.filter((e) => !checkedStories.includes(e.the_day))
                  )
                }}
              />

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
          )
        })}
      </div>
    </Layout>
  )
}

export default Home
