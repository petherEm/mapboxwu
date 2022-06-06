import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import MasterMap22 from "../components/MasterMap22";
import MasterMap19 from "../components/MasterMap19";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Turkey() {
  return (
    <div className="flex flex-col justify-center bg-yellow-500">
      <Head>
        <title>WU CE Mapping</title>
        <meta name="description" content="WU CE Mapping" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Header title="Turkey" />

      <div className="flex flex-col lg:flex-row md:flex-row h-screen">
        <div className="flex flex-1 lg:mr-4 md:mr-4">
          <MasterMap19 />
        </div>

        <div className="flex flex-1">
          <MasterMap22 />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
