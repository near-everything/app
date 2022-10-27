import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name='application-name' content='everything' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='everything' />
        <meta name='description' content='App for the inventory of everything' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://everything.dev' />
        <meta name='twitter:title' content='everything' />
        <meta name='twitter:description' content='App for the inventory of everything' />
        <meta name='twitter:image' content='https://everything.dev/icons/android-chrome-192x192.png' />
        <meta name='twitter:creator' content='@collctevrything' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='everything' />
        <meta property='og:description' content='App for the inventory of everything' />
        <meta property='og:site_name' content='everything' />
        <meta property='og:url' content='https://everything.dev' />
        <meta property='og:image' content='https://everything.dev/icons/apple-touch-icon.png' />
      </Head>
      <body className="text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
