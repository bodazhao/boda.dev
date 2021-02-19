import Link from "next/link"
import { BsArrowUp } from "react-icons/bs"

export const Layout = ({
  children,
  hideFooter,
}: {
  children: JSX.Element | JSX.Element[]
  hideFooter?: boolean
}) => {
  return (
    <div className="px-5 m-auto max-w-4xl">
      <header className="flex justify-between items-center py-5 lg:py-10">
        <Link href="/">
          <a className="text-3xl">boda.dev</a>
        </Link>
      </header>

      <main className="pt-5 pb-20 lg:px-16">{children}</main>

      {!hideFooter && (
        <footer className="flex justify-center pt-5 mb-10">
          <button>
            <BsArrowUp
              size={20}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            />
          </button>
        </footer>
      )}
    </div>
  )
}
