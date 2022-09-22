import styled from "styled-components";

const FloatingDiv = styled.div`
    width: 30vh;
    position: fixed;
    bottom: 5px;
    right: 5px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(255,255,255,0.7);
`;

const FloatingToggle = styled.div`
    cursor: pointer;
`;

const MapOverlayNavbar = styled.nav`
    align-self: center;
    order:99;
    bottom: 0;
`;

const MapOverlayNavbarIcon = styled.img`
    width: 5vh;
`;

const SlidingInfobar = styled.div`
    width: 50%;
    height: 95%;
    max-width: 600px;
    bottom: 2.5%;
    
    position: fixed;
    background-color: rgba(255,255,255,0.7);
    
    border-radius: 10px;
    box-shadow: 0 0 50px -25px black;
    
    display: flex;
    direction: column;
    justify-content: center;
    
    transition: left 0.5s;
    
    &.slide-enter {
        left: -50%;
    }
    
    &.slide-enter-active{
        left: 1%;
    }
    
    &.slide-exit {
        left: 1%;
    }
    
    &.slide-exit-active{
        left: -50%;
    }
`;

export { FloatingToggle, MapOverlayNavbar, MapOverlayNavbarIcon, FloatingDiv, SlidingInfobar};