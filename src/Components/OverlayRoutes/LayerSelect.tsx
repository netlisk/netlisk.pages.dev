import {
    BIOMES,
    BIOMES_LAYERS,
    BURG_LAYERS, BURGS,
    PHYSICAL,
    PHYSICAL_LAYERS,
    POLITICAL,
    POLITICAL_LAYERS,
    ROUTES,
    ROUTES_LAYERS
} from "../../Utils/Constants";

import {MapOverlayHeading, MapOverlayChecklist} from "./style";

function LayerSelect (props:any){

    return (
        <MapOverlayChecklist>
            <MapOverlayHeading>Toggle Views</MapOverlayHeading>
            <div>
        <input type={"checkbox"} id={"political"} name={"political"} onChange={(e) =>{
            for (var layername of POLITICAL_LAYERS){
                props.map.setLayoutProperty(
                    layername,
                    "visibility",
                    e.target.checked ? 'visible' : 'none'
                );
            }
        }}/><label htmlFor={"political"}>{POLITICAL}</label>
            </div>
    <br/>
            <div>
    <input type={"checkbox"} id={"routes"} name={"routes"} onChange={(e) =>{
        for (var layername of ROUTES_LAYERS){
            props.map.setLayoutProperty(
                layername,
                "visibility",
                e.target.checked ? 'visible' : 'none'
            );
        }
    }}/><label htmlFor={"routes"}>{ROUTES}</label>
            </div>
    <br/>
            <div>
    <input type={"checkbox"} id={"physical"} name={"physical"} onChange={(e) =>{
        for (var layername of PHYSICAL_LAYERS){
            props.map.setLayoutProperty(
                layername,
                "visibility",
                e.target.checked ? 'visible' : 'none'
            );
        }
    }}/><label htmlFor={"physical"}>{PHYSICAL}</label>
            </div>
    <br/>
            <div>
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
            <div>
                <input type={"checkbox"} id={"biomes"} name={"biomes"} onChange={(e) =>{
                    for (var layername of BIOMES_LAYERS){
                        props.map.setLayoutProperty(
                            layername,
                            "visibility",
                            e.target.checked ? 'visible' : 'none'
                        );
                    }
                }}/><label htmlFor={"biomes"}>{BIOMES}</label>
            </div>
        </MapOverlayChecklist>
    );
}

export default LayerSelect;