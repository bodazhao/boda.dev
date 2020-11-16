import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";

import "../styles/index.css";
import { Layout, CodeBlock } from "@/components";

// Global markdown wrapper. To override wrapper for a single entry point
// at the page level, see https://mdxjs.com/getting-started#default-exports
// Passed props can include metadata and variables.
const Wrapper = (props) => (
  <Layout>
    <article className="m-auto prose prose-sm lg:prose">
      {props.children}
    </article>
  </Layout>
);

const mdComponents = {
  wrapper: Wrapper,
  // h1: (props) => <h1 {...props} />,
  // h2: (props) => <h2 {...props} />,
  // h3: (props) => <h3 {...props} />,
  // p: (props) => <p {...props} />,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/**
         * Adding <meta name="viewport" ...> in pages/_document.js will lead to
         * unexpected results since it cannot be deduped. The viewport tag should
         * be handled by next/head in pages/_app.js.
         */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boda.dev | A Developer's Blog</title>
        <link rel="icon" href="/macintosh.svg" />
      </Head>

      <MDXProvider components={mdComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
