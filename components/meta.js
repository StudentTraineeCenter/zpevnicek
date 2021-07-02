import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <meta name="application-name" content="STC Zpěvníček" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="PWA App" />
      <meta
        name="description"
        content="STC Zpěvníček pro všechny vaše hudební požadavky."
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://zpevnicek.studentstc.cz/" />
      <meta name="twitter:title" content="STC Zpěvníček" />
      <meta
        name="twitter:description"
        content="STC Zpěvníček pro všechny vaše hudební požadavky."
      />
      <meta name="twitter:site" content="@microsoftstc" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="STC Zpěvníček" />
      <meta
        property="og:description"
        content="STC Zpěvníček pro všechny vaše hudební požadavky."
      />
      <meta property="og:site_name" content="STC Zpěvníček" />
      <meta property="og:url" content="https://zpevnicek.studentstc.cz/" />

      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />

      <meta
        name="description"
        content={`STC Zpěvníček pro všechny vaše hudební požadavky.`}
      />
    </Head>
  );
}
