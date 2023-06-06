import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Page({ children }) {
  return (
    <div>
      <Head>
        <title>JM Homeo Clinic</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Homeopathy for all We care for Your Cure"
        />
      </Head>
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    </div>
  );
}

export default Page;
