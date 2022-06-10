import Head from 'next/head'

import 'tailwindcss/tailwind.css'

import { GlobalStyle } from '~/styles'

const Root = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.png' />
      <title>GraphQL Next Blog{pageProps?.seo?.title && ` | ${pageProps.seo.title}`}</title>
      <meta
        name='description'
        content={`${
          pageProps?.seo?.description ||
          'Here is the description.'
        }`}
      />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default Root
