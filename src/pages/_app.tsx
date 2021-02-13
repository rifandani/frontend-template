import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'
// react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// react-loader-spinner
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// axios + swr
import axios from 'axios'
import { SWRConfig } from 'swr'
import { Provider } from 'react-redux'
// files
import '../styles/index.css'
// import 'tailwindcss/tailwind.css'
import store from '../redux/store'

// axios BASE URL
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://jsonplaceholder.typicode.com'
    : 'https://roompy.vercel.app/api'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Website | Template</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="twitter:title" content="Roompy | Find your soul roommate" />
        <meta name="twitter:card" content="summary" />
        <meta name="description" content="Deskripsi website." />
        <meta name="twitter:image" content="favicon.ico" />
      </Head>

      <Provider store={store}>
        <SWRConfig
          value={{
            // refreshInterval: 3000, // automatic re-fetching data in API every 3s
            fetcher: (url: string) => axios.get(url).then((res) => res.data),
          }}
        >
          <Component {...pageProps} />
          <ToastContainer />
        </SWRConfig>
      </Provider>
    </>
  )
}

export default MyApp
