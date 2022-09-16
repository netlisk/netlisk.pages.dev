import styled from "styled-components";
import {CSSTransition} from "react-transition-group";


const Toast = styled.div`
    text-align: center;
    bottom: 5vh;
    left: 50%;
    position: fixed;
    color: white;
    background-color: rgba(255,0,0,0.7);
    border: 2px rgba(255,0,0,1);
    border-radius: 20px;
    padding: 8px;
    min-width: 20vh;
    min-height: 30px;
    margin-left: -10vh;
    
    transition: opacity 0.5s;
    &.fade-enter{
        opacity: 0;
    }
    &.fade-ender-active{
        opacity: 1;
    }
    &.fade-exit{
        opacity: 1;
    }
    &.fade-exit{
        opacity: 0;
    }
`;
function ErrorToast(props: any){
    //if (!props.error) return null;
    return(
        <CSSTransition in={props.error} classNames={"fade"} timeout={500} unmountOnExit={true}>
            <Toast>{props.body}</Toast>
        </CSSTransition>
    )
}

export default ErrorToast;