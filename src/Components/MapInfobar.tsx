import {SlidingInfobar, InfobarTab} from "./style";
import {CSSTransition} from "react-transition-group";
import React, {useEffect, useRef, useState} from "react";
import {burgStorage} from "../Utils/firebase";
import {ref, getBlob} from "firebase/storage";
import ErrorToast from "../Utils/Error";
import ReactMarkdown from "react-markdown";


function MapInfobarTab(props: any){
    let pad = props.active ? {left:0} : {left:600};
    // tab toggles both the map padding and the infobox
    return(
        <InfobarTab onClick={()=>{
            props.setActive(!props.active);
            props.map.easeTo({
                padding: pad,
                duration: 500,
                essential: true
            })
        }}>
            Notes
        </InfobarTab>
    );
}

function MapInfobarContainer(props: any){
    let [active, setActive] = useState<boolean | null>(null);
    let [body, setBody] = useState<string>("");
    let [error, setError] = useState<boolean>(false);
    let [errorText, setErrorText] = useState<string>("");
    const nodeRef = useRef(null);

    useEffect(()=>{
        if (props.marker !== null){
            let R = new FileReader();
            let markerRef = ref(burgStorage, props.marker.properties.Burg+".md");
            setBody("Loading..");
            setActive(true);
            if (R.readyState === 0) {
                getBlob(markerRef) // async download
                    .then((blob) => {
                        R.readAsText(blob)
                        R.onloadend = () =>{ // async read blob
                            setBody(R.result as string);
                            setError(false);
                            setErrorText("");
                        }
                    })
                    .catch((error) => {
                        switch (error.code) {
                            case 'storage/object-not-found':
                                setBody("No file in database yet.");
                                break;
                            default:
                                setError(true);
                                setErrorText("Error fetching resource! Check network response.");
                                setActive(false);
                                break;
                        }
                    })
            }
        } else {
            setError(false);
            setErrorText("");
        }
    }, [props.marker])

    if (active === null) {
        return(
            <></>
            );
    }
    return(
            <>
                <ErrorToast body={errorText} error={error} />
            <CSSTransition in={active} classNames="slide" timeout={500} unmountOnExit={false} nodeRef={nodeRef}>
                <SlidingInfobar ref={nodeRef}>
                    <MapInfobarTab setActive={setActive} active={active} map={props.map} />
                    <MapInfobar active={active} body={body}/>
                </SlidingInfobar>
            </CSSTransition>
            </>
    );
}

function MapInfobar(props: { active: boolean; body: string; }){
    if (!props.active) return null;
    return(
        <div>
            <ReactMarkdown >{props.body}</ReactMarkdown>
        </div>
    )
}

export default MapInfobarContainer;
