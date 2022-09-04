import {useEffect, useState} from "react";
import MapOverlayHidden from "./MapOverlayHidden";
import MapOverlay from "./MapOverlay";
import {FloatingDiv} from "./style";


function MapOverlayContainer(props: any){
    const [overlayHidden, setOverlayHidden] = useState(false);
    useEffect(() => {
        if (props.map === null) return; // enforce map load - doesn't work??
    })

    return(
        <FloatingDiv>
            {overlayHidden
            ? <MapOverlayHidden setOverlayHidden={setOverlayHidden} />
            : <MapOverlay map={props.map} setOverlayHidden={setOverlayHidden} />
            }
        </FloatingDiv>
    );
}

export default MapOverlayContainer;