import {FloatingToggle} from "./style";

function MapOverlayHidden(props: any){
    return(
        <FloatingToggle onClick={()=>{
        props.setOverlayHidden(false);
    }}>
            ▲
        </FloatingToggle>
    );
}

export default MapOverlayHidden;