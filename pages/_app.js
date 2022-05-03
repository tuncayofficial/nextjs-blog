import App from "next/app";
import "../public/styles/style.css"
import "../public/styles/index.css"
import "../public/styles/tags.css"
import "../public/styles/register.css"
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
    return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
    )
}

MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
};

export default MyApp