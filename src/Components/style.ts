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
    width: 30vh;
    height: 100vh;
    bottom: 0px;
    position: fixed;
    background-color: rgba(255,255,255,0.7);
    
    display: flex;
    direction: column;
    justify-content: space-between;
    
    transition: left 500ms;
    
    &.slide-enter {
        left: -30vh;
    }
    
    &.slide-enter-active{
        left: 0;
    }
    
    &.slide-exit {
        left: 0;
    }
    
    &.slide-exit-active{
        left: -30vh;
    }
`;

export { FloatingToggle, MapOverlayNavbar, MapOverlayNavbarIcon, FloatingDiv, SlidingInfobar};