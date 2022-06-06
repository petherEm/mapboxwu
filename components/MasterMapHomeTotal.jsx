import { useState } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import Master from "../data/master";
import Competition from "../data/competition";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { AiFillBank } from "react-icons/ai";
import { HiHome, HiSearch } from "react-icons/hi";

function MasterMapHome() {
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [revenue_2019, setRevenue_2019] = useState();
  const [txn_2019, setTxn_2019] = useState();
  const [revenue_2022, setRevenue_2022] = useState();
  const [txn_2022, setTxn_2022] = useState();

  const [limit, getLimit] = useState(100);
  const [color, setColor] = useState("blue");
  const [selectedCity, setSelectedCity] = useState();
  const [city, setCity] = useState();
  const [showComp, setShowComp] = useState(false);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 51.16,
    longitude: 10.45,
    zoom: 6,
  });


  const handleMarkerClick = (
    Account_Address,
    rev_2019,
    rev_2022,
    txnTr_2019,
    txnTr_2022,
    txnRo_2019,
    txnRo_2022,
    txnAfg_2019,
    txnAfg_2022
  ) => {
    setCurrentPlaceId(Account_Address);
    setRevenue_2019(rev_2019);
    setRevenue_2022(rev_2022);

    const txn_2019 = txnTr_2019 + txnRo_2019 + txnAfg_2019;
    const txn_2022 = txnTr_2022 + txnRo_2022 + txnAfg_2022;
    

    setTxn_2019(txn_2019);
    setTxn_2022(txn_2022);
    
  };

  return (
    <div className="h-full w-full">
      <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center bg-indigo-400 p-4">
        <div className="flex items-center text-sm">
          <div className="flex flex-col items-start">
            <div className="">
              <button
                className="bg-yellow-500 px-2 py-1 rounded-md shadow-lg hover:bg-yellow-600"
                onClick={() => setColor("gold")}
              >
                DPB
              </button>
              <button
                className="bg-blue-700 text-white px-2 py-1 rounded-md shadow-lg m-2 hover:bg-blue-800"
                onClick={() => setColor("blue")}
              >
                Reise
              </button>
              <button
                className="bg-red-600 text-white px-2 py-1 rounded-md shadow-lg m-2 hover:bg-red-700"
                onClick={() => setColor("red")}
              >
                Indep
              </button>
              <button
                className="bg-green-500 text-white px-2 py-1 rounded-md shadow-lg m-2 hover:bg-green-700"
                onClick={() => setColor("lightgreen")}
              >
                Ucamb
              </button>
            </div>

            <div className="relative">
              <input
                className="w-[150px] px-4 py-1 rounded-lg text-[16px] text-slate-600 focus:outline-none"
                type="text"
                placeholder="City"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value.toUpperCase())}
              />
              <button
                className="absolute top-0 right-0 text-black text-sm px-2 p-[4px] rounded-full ml-2"
                onClick={() => setCity(selectedCity)}
              >
                <HiSearch style={{ fontSize: "18px" }} />
              </button>
            </div>
          </div>

          <div className="bg-slate-500 text-white px-4 py-4 shadow-lg rounded-2xl m-4">
            <h1 className="text-sm font-bold"># of WU Locs displayed</h1>
            <div className="text-sm">
              <span className="text-sm">Total:</span>{" "}
              {city
                ? Master.filter((i) => i.City === city).length
                : Master.filter((i) => i.Color === color).length}
            </div>
          </div>
        </div>

        {/* TXN FILTER BOX */}
        {/* TXN FILTER BOX */}

        <div className="">
          <h1 className="text-md font-bold">2022 Transactions per quarter</h1>
          <button
            className="bg-yellow-500 px-2 py-1 rounded-md shadow-lg m-2"
            onClick={() => getLimit(100)}
          >
            100
          </button>
          <button
            className="bg-yellow-500 px-2 py-1 rounded-md shadow-lg m-2"
            onClick={() => getLimit(200)}
          >
            200
          </button>
          <button
            className="bg-yellow-500 px-2 py-1 rounded-md shadow-lg m-2"
            onClick={() => getLimit(300)}
          >
            300
          </button>
          <button
            className="bg-yellow-500 px-2 py-1 rounded-md shadow-lg m-2"
            onClick={() => getLimit(400)}
          >
            400
          </button>
          <input
            className="bg-yellow-300 w-[80px] px-2 py-1 rounded-md shadow-lg m-2"
            type="number"
            value={limit}
            onChange={(e) => getLimit(e.target.value)}
          />
        </div>

         {/* END TXN FILTER BOX */}
         {/* END TXN FILTER BOX */}

        <div className="flex flex-col items-center">
          
          <div className="bg-slate-500 text-white px-4 py-4 shadow-lg rounded-2xl m-4">
            <h1 className="text-sm font-bold"># Comp breakdown</h1>
            <div className="text-sm flex gap-x-2">
              <HiHome style={{ fontSize: "18px", color: "white" }} />
              <span className="text-sm font-bold">MGI:</span>{" "}
              {Competition.filter((i) => i.Color === "white").length}
              <HiHome style={{ fontSize: "18px", color: "cyan" }} />
              <span className="text-sm font-bold">RIA:</span>{" "}
              {Competition.filter((i) => i.Color === "cyan").length}
            </div>
          </div>
          <button
            className="bg-slate-300 hover:bg-slate-400 p-2 text-black text-sm rounded-lg shadow-lg"
            onClick={() => (!showComp ? setShowComp(true) : setShowComp(false))}
          >
            {!showComp ? "Show Competition" : "Hide them"}
          </button>
        </div>
      </div>

      {/* Map Component kicks-in */}
      {/* Map Component kicks-in */}
      {/* Map Component kicks-in */}
      {/* Map Component kicks-in */}

      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.NEXT_PUBLIC_API_MAPBOX}
        onMove={(e) => setViewport(e.viewport)}
        mapStyle="mapbox://styles/petherem/ckz10c0ey005715l8t6s2yufc"
      >
        {city
          ? Master.filter((pblocs) => pblocs.City === city && pblocs["2022_Q1_txn_to_Turkey"] + pblocs["2022_Q1_txn_to_Romania"] + pblocs["2022_Q1_txn_to_Afghanistan"] >= limit).map((pblocs) => (
              <div key={pblocs.Account_Number}>
                <Marker
                  latitude={pblocs.Lat}
                  longitude={pblocs.Long}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <HiHome
                    style={{ fontSize: "20px", color: pblocs.Color }}
                    onClick={() =>
                      handleMarkerClick(
                        pblocs.Address,
                        pblocs["2019_Q1_rev_to_Turkey"],
                        pblocs["2022_Q1_rev_to_Turkey"],
                        pblocs["2019_Q1_txn_to_Turkey"],
                        pblocs["2022_Q1_txn_to_Turkey"],
                        pblocs["2019_Q1_txn_to_Romania"],
                        pblocs["2022_Q1_txn_to_Romania"],
                        pblocs["2019_Q1_txn_to_Afghanistan"],
                        pblocs["2022_Q1_txn_to_Afghanistan"]
                      )
                    }
                  />
                </Marker>

                {pblocs.Address === currentPlaceId ? (
                  <Popup
                    latitude={pblocs.Lat}
                    longitude={pblocs.Long}
                    closeButton={true}
                    closeOnClick={false}
                    className=""
                    anchor="left"
                    onClick={() => handleMarkerClick(null)}
                  >
                    <div className="text-[14px]">
                      <label className="font-bold">PERFORMANCE</label>
                      <Bar
                        data={{
                          labels: ["2019", "2022"],
                          datasets: [
                            {
                              label: "($) Transactions Q1",
                              data: [txn_2019, txn_2022],
                              backgroundColor: ["rgba(255, 99, 132, 0.5)"],

                              borderWidth: 1,
                            },
                            // {
                            //     label: "Transactions",
                            //     data: [txn_2021, txn_2022],
                            //     backgroundColor: ["rgba(53, 162, 235, 0.5)"],

                            //     borderWidth: 1

                            // }
                          ],
                        }}
                        options={({ responsive: true }, { aspectRatio: 1.5 })}
                        className=""
                      />
                     
                      <label className="font-bold">Address</label>
                      <p className="">
                        {pblocs.Address}, {pblocs.City}, {pblocs.Province}
                      </p>
                    </div>
                  </Popup>
                ) : (
                  false
                )}
              </div>
            ))
          : Master.filter((pblocs) => pblocs.Color === color && pblocs["2022_Q1_txn_to_Turkey"] + pblocs["2022_Q1_txn_to_Romania"] + pblocs["2022_Q1_txn_to_Afghanistan"] >= limit).map((pblocs) => (
              <div key={pblocs.Account_Number}>
                <Marker
                  latitude={pblocs.Lat}
                  longitude={pblocs.Long}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <HiHome
                    style={{ fontSize: "20px", color: pblocs.Color }}
                    onClick={() =>
                      handleMarkerClick(
                        pblocs.Address,
                        pblocs["2019_Q1_rev_to_Turkey"],
                        pblocs["2022_Q1_rev_to_Turkey"],
                        pblocs["2019_Q1_txn_to_Turkey"],
                        pblocs["2022_Q1_txn_to_Turkey"],
                        pblocs["2019_Q1_txn_to_Romania"],
                        pblocs["2022_Q1_txn_to_Romania"],
                        pblocs["2019_Q1_txn_to_Afghanistan"],
                        pblocs["2022_Q1_txn_to_Afghanistan"]
                      )
                    }
                  />
                </Marker>
                {pblocs.Address === currentPlaceId ? (
                  <Popup
                    latitude={pblocs.Lat}
                    longitude={pblocs.Long}
                    closeButton={true}
                    closeOnClick={false}
                    className=""
                    anchor="left"
                    onClick={() => handleMarkerClick(null)}
                  >
                    <div className="text-[14px]">
                      <label className="font-bold">PERFORMANCE</label>
                      <Bar
                        data={{
                          labels: ["2019", "2022"],
                          datasets: [
                            {
                              label: "($) Transactions Q1",
                              data: [txn_2019, txn_2022],
                              backgroundColor: ["rgba(255, 99, 132, 0.5)"],

                              borderWidth: 1,
                            },
                            // {
                            //     label: "Transactions",
                            //     data: [txn_2021, txn_2022],
                            //     backgroundColor: ["rgba(53, 162, 235, 0.5)"],

                            //     borderWidth: 1

                            // }
                          ],
                        }}
                        options={({ responsive: true }, { aspectRatio: 1.5 })}
                        className=""
                      />
                      
                      <label className="font-bold">Address</label>
                      <p className="">
                        {pblocs.Address}, {pblocs.City}, {pblocs.Province}
                      </p>
                    </div>
                  </Popup>
                ) : (
                  false
                )}
              </div>
            ))}

        {showComp &&
          Competition.map((comp) => (
            <Marker
              key={comp.cid}
              latitude={comp.lat}
              longitude={comp.long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <HiHome
                style={{ fontSize: "20px", color: comp.Color || "violet" }}
                onClick={() => handleMarkerClick(comp.street)}
              />
              {comp.street === currentPlaceId ? (
                <Popup
                  latitude={comp.lat}
                  longitude={comp.long}
                  closeButton={true}
                  closeOnClick={false}
                  className=""
                  anchor="left"
                  onClick={() => handleMarkerClick(null)}
                >
                  <div className="text-[14px]">
                    <label className="font-bold"></label>

                    <label className="font-bold">{comp.title}</label>
                    <h4 className="">{comp.title}</h4>
                    <label className="font-bold">
                      <br />
                    </label>
                    <p className="">
                      {comp.address}, {comp.city}, {comp.locatedIn}
                    </p>
                    <p className="">{comp.phone}</p>
                  </div>
                </Popup>
              ) : (
                false
              )}
            </Marker>
          ))}

        <NavigationControl />
        <FullscreenControl />
      </ReactMapGL>
    </div>
  );
}

export default MasterMapHome;
