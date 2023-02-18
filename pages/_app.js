import '@/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "@/components/Layout";
import '/styles/custom.scss';
function App({ Component, pageProps }) {
  return (

      <Layout>
          <Component {...pageProps} />
      </Layout>
      )
}
export default App