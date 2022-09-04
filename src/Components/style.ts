import styled from "styled-components";
import MapOverlay from "./MapOverlay";

const StyledMapOverlay = styled(MapOverlay)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 20%;
    height: 50%;
    position: fixed;
    bottom: 5px;
    right: 5px;
    background-color: rgba(255,255,255,0.7);
`;

const MapOverlayNavbar = styled.nav`
    align-self: center;
    order:99;
    bottom: 0;
`;

const MapOverlayNavbarIcon = styled.img`
    width: 5vh;
`;

export {StyledMapOverlay, MapOverlayNavbar, MapOverlayNavbarIcon};