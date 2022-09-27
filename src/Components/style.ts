import styled from "styled-components";

const SlidingInfobar = styled.div`
    width: calc(0.75 * 95vh);
    height: 95vh;
    bottom: 2.5vh;
    margin-left: 1.2rem;
    
    display: grid;
    grid-template-columns: [content] 1fr [content-end] 1.2rem [tab-end];
    grid-template-rows: [top] 0.1fr [tab1] 8em [tab2] auto [fill];
     
    position: fixed;
    justify-content: center;
    
    transition: transform 0.5s;
    
    &.slide-enter {
        transform: translate(calc(-0.75 * 95vh))
    }
    
    &.slide-enter-active{
        transform: translate(0)
    }
    
    &.slide-exit {
        transform: translate(0)
    }
    
    &.slide-exit-active{
        transform: translate(calc(-0.75 * 95vh))
    }
    
    &.slide-exit-done{
        transform: translate(calc(-0.75 * 95vh))
    }
`;

const InfobarTab = styled.div`
    writing-mode: vertical-lr;
    background-color: rgba(255,255,255,0.7);
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    vertical-align: top;

    grid-column-start: content-end;
    grid-column-end: tab-end;
    grid-row-start: top;
    grid-row-end: tab1;
`;

const InfobarShortcut = styled.div`
    border-radius: 0 10px 10px 0;
    
    writing-mode: vertical-lr;
    background-color: rgba(255,255,255,0.5);
    cursor: pointer;
    
    grid-column-start: content-end;
    grid-column-end: tab-end;
    grid-row-start: tab1;
    grid-row-end: tab2;

`;

const WikiContent = styled.div`
    background-color: rgba(255,255,255,0.7);
    border-radius: 10px 0 10px 0;
    box-shadow: -5px 5px 5px -5px gray;
    position: relative;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: calc(0.75 * 95vh - 3.2rem);
    overflow: auto;
    text-align: left;
    vertical-align: top;
    
    grid-column-start: content;
    grid-column-end: content-end;
    grid-row-start: top;
    grid-row-end: fill;
    
`;

export {WikiContent, InfobarShortcut, InfobarTab, SlidingInfobar};