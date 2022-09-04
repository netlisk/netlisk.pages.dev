import styled from "styled-components";


const MapOverlayText = styled.div`
    display: flex;
    flex-direction: column;
    align-self:stretch;
    align-items:flex-start;
    align-content:top;
    padding: 10px;
`;

const MapOverlayHeading = styled.h2`
    align-self: center;
`;

const MapOverlayChecklist = styled.div`
    display:flex;
    flex-direction: column;
    align-self: stretch;
    justify-content: stretch;
    justify-self: stretch;
    align-items: flex-start;
`;

export {MapOverlayText, MapOverlayHeading, MapOverlayChecklist}