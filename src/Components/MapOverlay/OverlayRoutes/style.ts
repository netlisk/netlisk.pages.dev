import styled from "styled-components";


const MapOverlayText = styled.div`
    display: flex;
    flex-direction: column;
    align-self:stretch;
    align-items:flex-start;
    align-content:top;
    padding-left: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
`;

const MapOverlayHeading = styled.h2`
    align-self: center;
`;

const MapOverlayChecklist = styled.div`
    display:flex;
    flex-direction: column;
    align-self: stretch;
    justify-content: space-between;
    justify-self: stretch; 
    align-items: flex-start;
    padding-left: 2rem;
    padding-right: 2rem;
`;

export {MapOverlayText, MapOverlayHeading, MapOverlayChecklist}