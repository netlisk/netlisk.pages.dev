import {useRef, useEffect, useState} from 'react';
import * as mapboxgl from 'mapbox-gl';
import {LngLatBoundsLike} from "mapbox-gl";
import {PhysicalView, PoliticalView} from "../Utils/Constants";

(mapboxgl as any).accessToken = 'pk.eyJ1IjoibmV0bGlzayIsImEiOiJjbDdoaHRpZWgwZWg1M3BvM2hjcmdpdDk2In0.iV1TeP1HuYlkql58bKPf5g';
const bounds: LngLatBoundsLike = [
    [-35.761,-2.340],
    [-13.257,26.818]
];

function MapComponent(){
    const mapContainer: any = useRef(null);
    const map: any = useRef(null);
    const [lng, setLng] = useState(-25.606593);
    const [lat, setLat] = useState(14.382739);
    const [zoom, setZoom] = useState(4);
    const [view, setView] = useState("Physical");
    console.log(map);
    useEffect(() =>{
        if (map.current) return; // initialise one map only.
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/netlisk/cl7j0eocj000414pbh6gcsv2s",
            center:[lng, lat],
            zoom:zoom,
            maxBounds: bounds
        });
    });
    return (
        <>
            <div id="menu">
                <button onClick={() => map.current.setStyle(PhysicalView)}>
                    Physical
                </button>
                <button onClick={() => map.current.setStyle(PoliticalView)}>
                    Political
                </button>
            </div>
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
        </>
    );
}


export default MapComponent;