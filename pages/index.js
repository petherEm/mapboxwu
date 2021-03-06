import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "mapbox-gl/dist/mapbox-gl.css";
import MasterMapHome from "../components/MasterMapHome";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>WU CE Mapping</title>
        <meta name="description" content="Loc mapping" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
      </Head>

      <Navbar />

      {/* <Header title="WU vs Others" /> */}

      <div className="flex flex-col lg:flex-row md:flex-row h-screen">
        <div className="flex-1">
          <MasterMapHome />
        </div>

        {/* <div className="flex-1 bg-white shadow-2xl">
          <Image src="/district_DE.jpg" width="600px" height="600px" layout="responsive"/>
        </div> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
}
