import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
// import Script from '../utils/hocs/Script';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="supported-color-schemes" content="dark light" />
          <meta name="color-scheme" content="dark light" />

          {/* Primary Meta Tags */}
          <meta name="title" content="Artur Dani | My personal portfolio" />
          <meta
            name="description"
            content="My personal portfolio build with next.js (typescript) and tailwindcss"
          />

          <link
            href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased bg-grey-200 dark:bg-gray-800 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
