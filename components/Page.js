import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "react-scroll-to-top";
import IoIosArrowUp from "react-icons/io";

function Page({ children }) {
  return (
    <div>
      <Head>
        <title>JM Homeo Clinic</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="homoeopathy for all We care for Your Cure"
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
