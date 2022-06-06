import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import MasterMap22Rom from "../components/MasterMap22Rom";
import MasterMap19Rom from "../components/MasterMap19Rom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Romania() {
  return (
    <div className="flex flex-col justify-center">
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

      <Header title="Romania" />

      <div className="flex flex-col lg:flex-row md:flex-row h-screen">
        <div className="flex-1 mr-4">
          <MasterMap19Rom />
        </div>

        <div className="flex-1">
          <MasterMap22Rom />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
