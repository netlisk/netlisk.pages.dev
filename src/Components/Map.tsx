import {useRef, useEffect, useState} from 'react';
import * as mapboxgl from 'mapbox-gl';
import {LngLatBoundsLike} from "mapbox-gl";
import {
    DEFAULT_VIEW, ALL_LAYERS, MAPBOX_TOKEN,
} from "../Utils/Constants";
import MapOverlayContainer from "./MapOverlayContainer";
import {Feature} from "geojson";
import MapInfobarContainer from "./MapInfobar";

(mapboxgl as any).accessToken = MAPBOX_TOKEN;
const bounds: LngLatBoundsLike = [
    [-35.761,-2.340],
    [-13.257,26.818]
];


function Map(props: any){
    const mapContainer: any = useRef(null);
    const map: any = useRef(null);
    const [lng, setLng] = useState(-25.606593);
    const [lat, setLat] = useState(14.382739);
    const [zoom, setZoom] = useState(4);
    const [marker, setMarker]: any = useState(null);

    // Initialise map
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
    }, []);

    // Store current coords user is looking at.
    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    })

    useEffect(() =>{
        if (!map.current) return;
        map.current.on('click', (event: { point: any; }) =>{
            const markers:Feature[] = map.current.queryRenderedFeatures(event.point, {
                layers: ['burgs']
            });
            if (!markers.length){
                setMarker(null);
                return
            }
            setMarker(markers[0]);
            // send information to component?
        });
    });

    return (
        <>
        <div>
            <div ref={mapContainer} className={props.className} />
        </div>
            {(map.current !== null) && <MapOverlayContainer map={map.current} />}
            <MapInfobarContainer marker={marker} />
        </>
    );
}

export default Map;