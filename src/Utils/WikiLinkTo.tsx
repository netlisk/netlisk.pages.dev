import styled from "styled-components";
import {wikiStorage} from "./firebase";
import loadFromStore from "./loadFromStore";

const Link = styled.a`
    color: brown;
    cursor: pointer;
`;

function WikiLinkTo(props:{setBody: Function, href: string, children: string[]}){
    const setBody: Function = props.setBody;
    var path: string = props.href;
    const text: string = props.children[0];
    // Requires setBody, a link to the file relative to wiki-root
    // Pulls content from Firebase Storage and renders it by setting the body to the appropriate file.
    if (path.includes("http"))
        return(
            <Link href={path} target={"_blank"}>
            {text+"↗"}
            </Link>
        );
    else {
        if (path.includes("wiki-root/")) path = path.replace("wiki-root/", "")
        return (
            <Link onClick={() => {
                loadFromStore(setBody, wikiStorage, path);
            }}>
                {text}
            </Link>
        )
    }
}

export default WikiLinkTo;