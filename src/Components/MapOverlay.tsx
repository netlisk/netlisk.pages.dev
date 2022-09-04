import {useEffect} from "react";
import LayerSelect from "./OverlayRoutes/LayerSelect";
import Attribution from "./OverlayRoutes/Attribution";
import MapContext from "./OverlayRoutes/MapContext";
import {Link, Route, Routes} from "react-router-dom";
import IMG_home from "../static/home.png";
import IMG_layer from "../static/layer.png";
import IMG_info from "../static/information.png";
import {MapOverlayNavbar, MapOverlayNavbarIcon} from "./style";


function MapOverlay(props: any){
    useEffect(() => {
        if (props.map === null) return; // enforce map load - doesn't work??
    })

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
        </div>
);
}

export default MapOverlay;