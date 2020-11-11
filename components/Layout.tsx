import Link from "next/link";
import { BsTerminal, BsArrowUp } from "react-icons/bs";

export const Layout = ({ children }) => {
  return (
    <div className="px-3 m-auto max-w-4xl">
      <header className="flex justify-between items-center py-5 lg:py-10">
        <Link href="/">
          <a>
            <BsTerminal size={30} />
          </a>
        </Link>

        <Link href="/about">
          <a className="underline text-gray-700">about</a>
        </Link>
      </header>

      <main className="py-5 px-3">{children}</main>

      <hr />
      <footer className="flex justify-center pt-5 mb-10">
        <button>
          <BsArrowUp
            size={20}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </button>
      </footer>
    </div>
  );
};
