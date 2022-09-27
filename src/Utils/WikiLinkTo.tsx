import styled from "styled-components";
import {wikiStorage} from "./firebase";
import loadFromStore from "./loadFromStore";

const Link = styled.div`
    color: brown;
    cursor: pointer;
`;

function WikiLinkTo(props:{setBody: Function, href: string, children: string[]}){
    const setBody: Function = props.setBody;
    const path: string = props.href;
    const text: string = props.children[0];
    // Requires setBody, a link to the file relative to wiki-root
    // Pulls content from Firebase Storage and renders it by setting the body to the appropriate file.

    return (
        <Link onClick={()=>{
            loadFromStore(setBody, wikiStorage, path);
        }}>
            {text}
        </Link>
    )
}

export default WikiLinkTo;