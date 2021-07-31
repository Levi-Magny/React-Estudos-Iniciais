import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${props => `${props.color}`};
    border-radius: 4px;
    flex-wrap: wrap;
    box-shadow: 0 0 4px #222;
    padding: 16px;
`;

export const Radio = props => (
    <div>
        <input
            name = {props.groupBy}
            type = "radio"
            value = {props.value}
            onFocus = {props.color}
            defaultChecked = {props.checked}
        />
        <p>{props.label}</p>
    </div>
);
