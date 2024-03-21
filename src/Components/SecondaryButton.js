import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        border: 1px solid #64748B;
        border-radius: 24px;
        padding: 8px 16px 8px 16px;
        gap: 16px;
        min-width: ${minWidth};
        color: #152842;
        &:hover {
            background: #FFFFFF;
            opacity: 80%;
        }
        &:pressed {
            background: #FFFFFF;
            opacity: 60%;
        }
        &:active {
            background: #F8FAFC;
            opacity: 40%;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;