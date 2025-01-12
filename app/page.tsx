// import Image from "next/image";

// import styles from "@styles/homePage.module.css";

import Navbar from "@components/Navbar/Navbar";
import Header from "@components/Header/Header";
import Features from "@components/Features/Features";
import AboutUs from "@components/AboutUs/AboutUs";
import Mission from "@components/OurMission/Mission";
import Footer from "@components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Mission />
      <Features />
      <AboutUs />
      <Footer />

    </>
  );
}
