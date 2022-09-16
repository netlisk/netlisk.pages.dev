import {SlidingInfobar} from "./style";
import {CSSTransition} from "react-transition-group";
import React, {useEffect, useRef, useState} from "react";
import {burgStorage} from "../Utils/firebase";
import {ref, getBlob} from "firebase/storage";
import ErrorToast from "../Utils/Error";
import ReactMarkdown from "react-markdown";


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
            if (R.readyState === 0) {
                getBlob(markerRef) // async download
                    .then((blob) => {
                        R.readAsText(blob)
                        R.onloadend = () =>{ // async read blob
                            setBody(R.result as string);
                            setActive(true);
                            setError(false);
                            setErrorText("");
                        }
                    })
                    .catch((error) => {
                        setError(true);
                        switch (error.code) {
                            case 'storage/object-not-found':
                                setErrorText("No page in database for this town!");
                                break;
                            case 'storage/unknown':
                                setErrorText("Error fetching resource! Check network response.");
                                break;
                        }
                    })
            }
        } else {
            setActive(false);
            setBody("");
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
            <CSSTransition in={active} classNames="slide" timeout={500} unmountOnExit={true} nodeRef={nodeRef}>
                <SlidingInfobar ref={nodeRef}>
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
