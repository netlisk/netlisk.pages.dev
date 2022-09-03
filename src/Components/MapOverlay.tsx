import {useEffect} from "react";
import LayerSelect from "./LayerSelect";
import Attribution from "./Attribution";
import MapContext from "./MapContext";
import {Link, Route, Routes} from "react-router-dom";
import IMG_home from "../static/home.png";
import IMG_layer from "../static/layer.png";
import IMG_info from "../static/information.png";

function MapOverlay(props: any){
    useEffect(() => {
        if (props.map === null) return; // enforce map load - doesn't work??
    })

    return(
        <div className={"map-overlay"}>
            <Routes>
                <Route path={"/"} element={<MapContext />} />
                <Route path={"views"} element={<LayerSelect map={props.map} />} />
                <Route path={"about"} element={<Attribution />} />
            </Routes>
            <nav className={"map-overlay-nav"}>
                <Link to={"/"}><img className={"map-overlay-icon"} src={IMG_home} alt={"Home"}/> </Link>
                <Link to={"views"}><img className={"map-overlay-icon"} src={IMG_layer} alt={"Toggle Views"}/> </Link>
                <Link to={"about"}><img className={"map-overlay-icon"} src={IMG_info} alt={"About"}/></Link>
            </nav>
        </div>
);
}

export default MapOverlay;