import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        min-width: ${minWidth};
        color: white;
        border-radius: 24px;
        padding: 8px, 16px, 8px, 16px;
        gap: 16px;
        &:hover {
            background: #0F172A;
            opacity: 60%;
        }
        &:active {
            background: #E2E8F0;
            opacity: 40%;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;