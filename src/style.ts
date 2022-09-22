import styled from "styled-components";
import Map from "./Components/Map";

const Defaults = styled.div`
    text-align: center;
    padding-left: 1%;
`;

const DefaultMap = styled(Map)`
    height: 100vh;
`;

export { Defaults, DefaultMap }