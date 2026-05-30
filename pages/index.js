import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../components/Home";
import About from "../components/About";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Sahil Gupta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <HomeSection />
      <About />
      <Footer />
    </>
  );
}
