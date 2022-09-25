import styled from "styled-components";

const FloatingDiv = styled.div`
    width: 35%;
    max-width: 250px;
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
    margin-left: 1%;
    
    translate(-100%);
    
    position: fixed;
    background-color: rgba(255,255,255,0.7);
    
    border-radius: 10px 0 10px 0;
    box-shadow: -5px 5px 5px -5px gray;
    
    
    justify-content: center;
    
    transition: transform 0.5s;
    
    &.slide-enter {
        transform: translate(-102.5%)
    }
    
    &.slide-enter-active{
        transform: translate(0)
    }
    
    &.slide-exit {
        transform: translate(0)
    }
    
    &.slide-exit-active{
        transform: translate(-102.5%)
    }
    
    &.slide-exit-done{
        transform: translate(-102.5%)
    }
`;

const InfobarTab = styled.div`
    position: relative;
    left: 100%;
    
    
    height: 10%;
    
    writing-mode: vertical-lr;
    
    background-color: rgba(255,255,255,0.7);
    
    border-radius: 0 10px 10px 0;

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

export {InfobarTab, FloatingToggle, MapOverlayNavbar, MapOverlayNavbarIcon, FloatingDiv, SlidingInfobar};