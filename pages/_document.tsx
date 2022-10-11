import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            href="http://fonts.cdnfonts.com/css/berlin-sans-fb-demi"
            rel="stylesheet"
          />
          <link
            href="http://fonts.cdnfonts.com/css/futura-condensed-pt"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
