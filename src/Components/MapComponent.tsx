import {useRef, useEffect, useState} from 'react';
import * as mapboxgl from 'mapbox-gl';
import {LngLatBoundsLike} from "mapbox-gl";
import {
    PHYSICAL,
    POLITICAL,
    DEFAULT_VIEW,
    POLITICAL_LAYERS,
    ROUTES_LAYERS,
    PHYSICAL_LAYERS,
    ALL_LAYERS,
    BURG_LAYERS,
    BURGS,
    ROUTES
} from "../Utils/Constants";
import "../Styles/Map.css";
import AttributionComponent from "./AttributionComponent";

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
    const [view, setView] = useState(PHYSICAL);

    useEffect(() => {
        if (map.current) return; // initialise one map only.
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: DEFAULT_VIEW,
            center:[lng, lat],
            zoom:zoom,
            maxBounds: bounds
        });
        map.current.once('styledata', () =>{
            for (var layer of ALL_LAYERS){
                map.current.setLayoutProperty(layer, 'visibility', 'none');
            }
        })
    });

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    })

    return (
        <>
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
            {(map.current !== null) && <MapOverlayComponent view={view} setView={setView}  map={map.current} />}
        </>
    );
}

function MapOverlayComponent(props: any){
    useEffect(() => {
        if (props.map === null) return; // enforce map load - doesn't work??
    })

    return(
    <div className={"map-overlay"}>
        <div className={"map-overlay-blurb"} id={"blurb"}>
            <h2> Agil Isle </h2>
            <p>
                A small, isolated isle, founded by pilgrims of Agil (Aegil).
            </p>
        </div>
        <div className={"map-overlay-legend"} id={"legend"}>
            <h2>{props.view}</h2>
        </div>
        <div id="map-overlay-menu">
            <input type={"checkbox"} id={"political"} name={"political"} onChange={(e) =>{
                for (var layername of POLITICAL_LAYERS){
                    props.map.setLayoutProperty(
                        layername,
                        "visibility",
                        e.target.checked ? 'visible' : 'none'
                    );
                }
            }}/><label htmlFor={"political"}>{POLITICAL}</label>
            <br/>
            <input type={"checkbox"} id={"routes"} name={"routes"} onChange={(e) =>{
                for (var layername of ROUTES_LAYERS){
                    props.map.setLayoutProperty(
                        layername,
                        "visibility",
                        e.target.checked ? 'visible' : 'none'
                    );
                }
            }}/><label htmlFor={"routes"}>{ROUTES}</label>
            <br/>
            <input type={"checkbox"} id={"physical"} name={"physical"} onChange={(e) =>{
                for (var layername of PHYSICAL_LAYERS){
                    props.map.setLayoutProperty(
                        layername,
                        "visibility",
                        e.target.checked ? 'visible' : 'none'
                    );
                }
            }}/><label htmlFor={"physical"}>{PHYSICAL}</label>
            <br/>
            <input type={"checkbox"} id={"settlements"} name={"settlements"} onChange={(e) =>{
                for (var layername of BURG_LAYERS){
                    props.map.setLayoutProperty(
                        layername,
                        "visibility",
                        e.target.checked ? 'visible' : 'none'
                    );
                }
            }}/>
            <label htmlFor={"settlements"}>{BURGS}</label>
        </div>
        <AttributionComponent />
    </div>
    );
}

export default MapComponent;