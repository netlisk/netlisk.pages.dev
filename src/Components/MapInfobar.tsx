import {SlidingInfobar} from "./style";
import {CSSTransition} from "react-transition-group";
import React, {useEffect, useRef, useState} from "react";
import {firebaseStorage} from "../Utils/firebase";
import {ref, getBlob} from "firebase/storage";


function MapInfobarContainer(props: any){
    let [active, setActive] = useState<boolean | null>(null);
    let [body, setBody] = useState<string>("");
    const nodeRef = useRef(null);


    useEffect(()=>{
        if (props.marker !== null){
            let R = new FileReader();
            let markerRef = ref(firebaseStorage, props.marker.properties.Burg+".md");
            console.log(R.readyState);
            console.log(props.marker);
            if (R.readyState === 0) {
                // async load
                getBlob(markerRef)
                    .then((blob) => {
                        R.readAsText(blob)
                        R.onloadend = () =>{
                            setBody(R.result as string);
                            setActive(true);
                        }
                    })
                    .catch((error) => {
                        switch (error.code) {
                            case 'storage/object-not-found':
                                console.log(error);
                                break;
                            case 'storage/unknown':
                                console.log(error);
                                break;
                        }
                    })
            }
        } else {
            setActive(false);
            setBody("");
        }
    }, [props.marker])

    if (active === null) {
        return(
            <></>
            );
    }
    return(
            <CSSTransition in={active} classNames="slide" timeout={500} unmountOnExit={true} nodeRef={nodeRef}>
            <SlidingInfobar ref={nodeRef}>
                <MapInfobar active={active} body={body}/>
            </SlidingInfobar>
            </CSSTransition>
    );
}

function MapInfobar(props: { active: boolean; body: string; }){
    if (!props.active) return null;
    return(
        <div>
            <p>{props.body}</p>
        </div>
    )
}

export default MapInfobarContainer;
