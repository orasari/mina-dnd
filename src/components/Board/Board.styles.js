import styled from 'styled-components';

export const Board = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 20px;
    gap: 20px;
    justify-content: flex-start;
    background-color: ${(props) => props.theme.primaryBackground};
`;

export const Column = styled.div`
    background-color: ${(props) => props.theme.secondaryBackground};
    width: 250px;
    min-height: 400px;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px ${(props) => props.theme.cardShadow};
`;

export const ColumnTitle = styled.h3`
    text-align: center;
    color: ${(props) => props.theme.textPrimary};
    font-size: 18px;
    margin-bottom: 20px;
`;

export const TaskCard = styled.div`
    background-color: ${(props) => props.theme.cardBackground};
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 2px 4px ${(props) => props.theme.cardShadow};
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px ${(props) => props.theme.cardShadow};
    }
`;
