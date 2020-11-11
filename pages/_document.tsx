import Document, { Html, Head, Main, NextScript } from "next/document";

// A custom Document is commonly used to augment your application's <html> and
// <body> tags. This is necessary because Next.js pages skip the definition of
// the surrounding document's markup.
export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
