import { useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl, FullscreenControl } from "react-map-gl";
import Master from "../data/master";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { AiFillBank } from "react-icons/ai";
import { HiHome } from "react-icons/hi";

function MasterMap22Afg() {
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [revenue_2019, setRevenue_2019] = useState();
  const [txn_2019, setTxn_2019] = useState();
  const [revenue_2022, setRevenue_2022] = useState();
  const [txn_2022, setTxn_2022] = useState();

  const [limit, getLimit] = useState(100);


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
    txn_2019,
    txn_2022
  ) => {
    setCurrentPlaceId(Account_Address);
    setRevenue_2019(rev_2019);
    setRevenue_2022(rev_2022);
    setTxn_2019(txn_2019);
    setTxn_2022(txn_2022);
  };

  return (
    <div className="h-[100%] w-[100%]">
      <div className="flex items-center  justify-between bg-indigo-400 p-4">
        <div className="">
          <h1 className="text-md font-bold">2022 Transactions per quarter</h1>
          <button className="bg-yellow-500 px-2 py-1 rounded-md shadow-lg m-2" onClick={() => getLimit(100)}>100</button>
          <button className="bg-yellow-500 px-2 py-1 rounded-md shadow-lg m-2" onClick={() => getLimit(200)}>200</button>
          <button className="bg-yellow-500 px-2 py-1 rounded-md shadow-lg m-2" onClick={() => getLimit(300)}>300</button>
          <button className="bg-yellow-500 px-2 py-1 rounded-md shadow-lg m-2" onClick={() => getLimit(400)}>400</button>
          <input className="bg-yellow-300 w-[80px] px-2 py-1 rounded-md shadow-lg m-2" type="number" value={limit} onChange={(e) => getLimit(e.target.value)} />
        </div>
        <div className="">
          <h1 className="text-md font-bold"># of Locs displayed</h1>
          <div><span className="font-bold">Total:</span> {Master.filter(i => i["2022_Q1_txn_to_Afghanistan"] > limit).length}</div>
          
          <div><span className="font-bold">PB:</span> {Master.filter(i => (i["2022_Q1_txn_to_Afghanistan"] > limit) && i.Color === "gold").length}</div>
          <div><span className="font-bold">Reisebank:</span> {Master.filter(i => (i["2022_Q1_txn_to_Afghanistan"] > limit) && i.Color === "blue").length}</div>
          <div><span className="font-bold">Rest:</span> {Master.filter(i => (i["2022_Q1_txn_to_Afghanistan"] > limit) && i.Color === "red").length}</div>
          
        </div>


      </div>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.NEXT_PUBLIC_API_MAPBOX}
        onMove={(e) => setViewport(e.viewport)}
        mapStyle="mapbox://styles/petherem/ckz10c0ey005715l8t6s2yufc"
      >
        {Master.filter(
          (pblocs) => pblocs["2022_Q1_txn_to_Afghanistan"] >= limit
        ).map((pblocs) => (
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
                    pblocs["2019_Q1_rev_to_Afghanistan"],
                    pblocs["2022_Q1_rev_to_Afghanistan"],
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
                  <label className="font-bold">
                    Network - {pblocs.Network}
                    {pblocs.ID}
                  </label>
                  <h4 className="">{pblocs.Network_Name}</h4>
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
        <NavigationControl />
        <FullscreenControl />
      </ReactMapGL>
    </div>
  );
}

export default MasterMap22Afg;
