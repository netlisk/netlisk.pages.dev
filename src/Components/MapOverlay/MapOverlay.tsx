import {Link, Route, Routes} from "react-router-dom";
import MapContext from "./OverlayRoutes/MapContext";
import LayerSelect from "./OverlayRoutes/LayerSelect";
import Attribution from "./OverlayRoutes/Attribution";
import IMG_home from "../../res/home.png";
import IMG_layer from "../../res/layer.png";
import IMG_info from "../../res/information.png";
import {MapOverlayNavbar, MapOverlayNavbarIcon, FloatingToggle} from "./style";


function MapOverlay(props: any){
    return(
        <div className={props.className}>
            <Routes>
                <Route path={"/"} element={<MapContext />} />
                <Route path={"views"} element={<LayerSelect map={props.map} layerState={props.layerState} toggleLayerState={props.toggleLayerState} />} />
                <Route path={"about"} element={<Attribution />} />
            </Routes>
            <MapOverlayNavbar>
                <Link to={"/"}><MapOverlayNavbarIcon src={IMG_home} alt={"Home"}/> </Link>
                <Link to={"views"}><MapOverlayNavbarIcon src={IMG_layer} alt={"Layers"} /> </Link>
                <Link to={"about"}><MapOverlayNavbarIcon src={IMG_info} alt={"About"}/></Link>
            </MapOverlayNavbar>
            <FloatingToggle onClick={()=>{
                props.setOverlayHidden(true);
            }}>▼</FloatingToggle>
        </div>
);
}

export default MapOverlay;