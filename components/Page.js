import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "react-scroll-to-top";

function Page({ children }) {
  return (
    <div>
      <Head>
        <title>Jm Homoeo Clinic - Chennai</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Carry out initial consultations with patients to learn their detailed case history. decide on the best use of homeopathic remedies to treat a range of conditions. monitor and evaluate patient progress.Our Clinic located in Bharathi Nagar Tharamani, Chennai - 600 113."
        />
        <link rel="canonical" href={`https://jmhomeoclinic.com`} />
        <meta
          name="google-site-verification"
          content="GFUBBKJX-kfXc7eEpvtDFiqQOZmSA9Khw_vteMjKGyU"
        />
      </Head>
      <ScrollToTop
        smooth
        color="#fff"
        height="18px"
        font
        style={{
          borderRadius: "50%",
          background: "#0360D9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    </div>
  );
}

export default Page;
