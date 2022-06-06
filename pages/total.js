import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import MasterMapHomeTotal from "../components/MasterMapHomeTotal";
import Navbar from "../components/Navbar";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Total() {
  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>WU CE Mapping</title>
        <meta name="description" content="WU CE Mapping" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>

      </Head>

      <Navbar />

     

      <div className="flex flex-col lg:flex-row md:flex-row h-screen">
        <div className="flex-1">
          <MasterMapHomeTotal />
        </div>

      </div>

      {/* <Footer /> */}
    </div>
  );
}
