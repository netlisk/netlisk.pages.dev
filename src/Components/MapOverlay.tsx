import {Link, Route, Routes} from "react-router-dom";
import MapContext from "./OverlayRoutes/MapContext";
import LayerSelect from "./OverlayRoutes/LayerSelect";
import Attribution from "./OverlayRoutes/Attribution";
import {MapOverlayNavbar, MapOverlayNavbarIcon, FloatingToggle} from "./style";
import IMG_home from "../static/home.png";
import IMG_layer from "../static/layer.png";
import IMG_info from "../static/information.png";


function MapOverlay(props: any){
    return(
        <div className={props.className}>
            <Routes>
                <Route path={"/"} element={<MapContext />} />
                <Route path={"views"} element={<LayerSelect map={props.map} />} />
                <Route path={"about"} element={<Attribution />} />
            </Routes>
            <MapOverlayNavbar>
                <Link to={"/"}><MapOverlayNavbarIcon src={IMG_home} alt={"Home"}/> </Link>
                <Link to={"views"}><MapOverlayNavbarIcon src={IMG_layer} alt={"Toggle Views"}/> </Link>
                <Link to={"about"}><MapOverlayNavbarIcon src={IMG_info} alt={"About"}/></Link>
            </MapOverlayNavbar>
            <FloatingToggle onClick={()=>{
                props.setOverlayHidden(true);
            }}>▼</FloatingToggle>
        </div>
);
}

export default MapOverlay;