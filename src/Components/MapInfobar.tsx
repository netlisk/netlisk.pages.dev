import {SlidingInfobar} from "./style";
import {CSSTransition} from "react-transition-group";
import React from "react";

function MapInfobarContainer(props: any){
    let active:boolean;
    let title:string = "";
    let body:string = "";
    if (props.marker !== null){
        active = true;
        title = props.marker.properties.Burg;
        body = String(props.marker.properties.Population);
    } else {
        active=false;
    }
    const nodeRef = React.useRef(null);

    return(
            <CSSTransition in={active} classNames="slide" timeout={500} unmountOnExit={true} nodeRef={nodeRef}>
            <SlidingInfobar ref={nodeRef}>
          <MapInfobar active={active} title={title} body={body}/>
            </SlidingInfobar>
            </CSSTransition>
    );
}

function MapInfobar(props: any){
    if (props.active === false) return null;
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    )
}

export default MapInfobarContainer;
