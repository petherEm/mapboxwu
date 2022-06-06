import React, { useState } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Master from "../data/master";

const Maps = () => {
  const [currentPlaceId, setCurrentPlaceId] = useState();

  

  const [viewport, setViewport] = useState({
    latitude: 51.1657,
    longitude: 10.4515,
    zoom: 8,
  });

  const handleMarkerClick = (data) => {
    setCurrentPlaceId(data);
  };

  return (
    <div className="h-screen w-screen">
      <ReactMapGL
        mapStyle="mapbox://styles/petherem/ckz10c0ey005715l8t6s2yufc"
        mapboxAccessToken="pk.eyJ1IjoicGV0aGVyZW0iLCJhIjoiY2t0bDdsZjNjMDZ5ZzJ1bzZzOTVrcThtcCJ9.RPfTeUsfK5Xzl09POvuPgw"
        {...viewport}
        width="100vw"
        height="100%"
        onMove={(e) => setViewport(e.viewport)}
      >
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        {Master.map((loc) => (
          <div>
            <Marker
              latitude={loc.Lat}
              longitude={loc.Long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div
                className="text-yellow-400 cursor-pointer"
                onClick={() => handleMarkerClick(loc.Address)}
              >
                O
              </div>
            </Marker>

            {loc.Address === currentPlaceId && (
              console.log(loc)
            //   <Popup
            //     latitude={loc.Lat}
            //     longitude={loc.Long}
            //     closeButton={true}
            //     closeOnClick={true}
            //     className="h-[300px] bg-white z-50"
            //     anchor="left"
            //     onClose={()=>setCurrentPlaceId(null)}
                
            //   >
            //     <div className="h-[100px] bg-white z-50">
            //       <label>Name</label>
            //       <h4 className="">{loc.Agent_Name}</h4>
            //       <label>NAID</label>
            //       <p className="">{loc.NAID}</p>
            //       <label>Address</label>
            //       <p className="">{loc.Address}</p>

            //       <label>Info</label>
            //       <span className="">
            //         Placeholder for what would you love to know. Created by{" "}
            //         <b>Piotr Maciejewski</b>
            //       </span>
            //     </div>
            //   </Popup>
            )}
          </div>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Maps;
