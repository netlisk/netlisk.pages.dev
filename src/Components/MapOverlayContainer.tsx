import {useEffect, useReducer, useState} from "react";
import MapOverlayHidden from "./MapOverlayHidden";
import MapOverlay from "./MapOverlay";
import {FloatingDiv} from "./style";

const initialState = {
    political: false,
    routes: false,
    physical: false,
    settlements: false,
    biomes: false
}

function MapOverlayContainer(props: any){
    const [overlayHidden, setOverlayHidden] = useState(false);
    let [layerState, toggleLayerState] = useReducer(
        (state: any, action: any) => {
            return{...state, ...{[action.layer]: !state[action.layer]} }
        },
        initialState
    );


    useEffect(() => {
        if (props.map === null) return; // enforce map load - doesn't work??
    })

    return(
        <FloatingDiv>
            {overlayHidden
            ? <MapOverlayHidden setOverlayHidden={setOverlayHidden} />
            : <MapOverlay map={props.map} setOverlayHidden={setOverlayHidden} layerState={layerState} toggleLayerState={toggleLayerState}/>
            }
        </FloatingDiv>
    );
}

export default MapOverlayContainer;