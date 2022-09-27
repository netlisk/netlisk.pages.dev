import {SlidingInfobar, InfobarTab, InfobarShortcut, WikiContent} from "./style";
import {CSSTransition} from "react-transition-group";
import React, {useEffect, useRef, useState} from "react";
import {burgStorage, wikiStorage} from "../Utils/firebase";
import ErrorToast from "../Utils/Error";
import ReactMarkdown from "react-markdown";
import WikiLinkTo from "../Utils/WikiLinkTo";
import loadFromStore from "../Utils/loadFromStore";

// Sets the tab to active, sets Mapbox vanishing point to make space for the panel
function toggleTab (active: boolean, setActive: Function, map: any) {
    const pad:{left:number} = active ? {left:0} : {left:600};
    setActive(!active);
    map.easeTo({
        padding: pad,
        duration: 500,
        essential: true
    })
}

function MapInfobarTab(props: { active: boolean; setActive: (arg0: boolean) => void; map: { easeTo: (arg0: { padding: { left: number; }; duration: number; essential: boolean; }) => void; }; }){
    return(
        <InfobarTab onClick={()=>{
            toggleTab(props.active,props.setActive, props.map);
        }}>
            Notes
        </InfobarTab>
    );
}

function MapInfobarShortcut(props: {active: boolean, setActive: Function, setBody: Function, map: { easeTo: (arg0: { padding: { left: number; }; duration: number; essential: boolean; }) => void; }}){
    // tab toggles both the map padding and the infobox
    return(
        <InfobarShortcut onClick={()=>{
            if (!props.active) toggleTab(props.active,props.setActive, props.map);
            // then load the wiki homepage
            loadFromStore(props.setBody, wikiStorage, 'root.md');
        }}>
            Compendium
        </InfobarShortcut>
    );
}

function MapInfobarContainer(props: any){
    let [active, setActive] = useState<boolean>(false);
    let [body, setBody] = useState<string>("");
    let [error, setError] = useState<boolean>(false);
    let [errorText, setErrorText] = useState<string>("");
    const nodeRef = useRef(null);

    useEffect(()=>{
        if (props.map !== null) {
            toggleTab(active, setActive, props.map);
            setBody("Open and close the control panel on the bottom right by clicking the arrow below it. \n" +
                "Select settlements on the map, or the compendium to load information on this leaf.")
        }
    }, [props.map]);

    useEffect(()=>{
        if (props.marker !== null){
            setActive(true);
            loadFromStore(setBody, burgStorage, props.marker.properties.Burg+".md");
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
            <CSSTransition in={active} classNames="slide" timeout={500} mountOnEnter={true} unmountOnExit={false} nodeRef={nodeRef}>
                <SlidingInfobar ref={nodeRef}>
                    <WikiContent >
                        <MapInfobar active={active} body={body} setBody={setBody} />
                    </WikiContent >
                    <MapInfobarTab setActive={setActive} active={active} map={props.map} />
                    <MapInfobarShortcut
                        setActive={setActive}
                        active={active}
                        map={props.map}
                        setBody={setBody} />
                </SlidingInfobar>
            </CSSTransition>
            </>
    );
}

function MapInfobar(props: { active: boolean; body: string; setBody: Function }){
    if (!props.active) return null;
    // Instead of ReactMarkdown, we render the raw mdx from storage - the MDX will need access to props,
    // setBody and the file path specifically.
    const setBody = props.setBody;
    return(
            <ReactMarkdown children={props.body} components={{
                p: ({children}) => {
                    return (typeof children[0] === "string")
                        ? <p> {children}</p>
                        : <div>{children}</div>;
                },
                a: ({...props}) => <WikiLinkTo {...props as any} setBody={setBody}  />
            }}  />
    )
}

export default MapInfobarContainer;
