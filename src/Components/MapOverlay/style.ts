import styled from "styled-components";

const FloatingToggle = styled.div`
    cursor: pointer;
`;

const FloatingDiv = styled.div`
    width: 35%;
    max-width: 250px;
    position: fixed;
    right: 1.2rem;
    bottom: 1.2rem;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
export {FloatingToggle, MapOverlayNavbar, MapOverlayNavbarIcon, FloatingDiv}