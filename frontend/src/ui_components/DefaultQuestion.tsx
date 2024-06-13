import React from 'react';
import '../styles/ui_componentens/defaultQuestion.css'
import Tooltip from "@mui/material/Tooltip";


interface DefaultQuestionProps {
    title: string,
    subtitle: string,
    question?: string,
    color?: string,
    tooltip?: string,
    onClick(): void,
}

export const DefaultQuestion: React.FC<DefaultQuestionProps> = (props: DefaultQuestionProps) => {
    return (
        <Tooltip arrow title={props.tooltip ? props.tooltip : props.title}>
            <div
                className={'default-question-container'}
                style={{backgroundColor: props.color ? props.color : '#fffff',}}
                onClick={() => props.onClick()}>
                <div className={'default-question-content'}>
                    <b>{props.title}</b>
                </div>
                <div>{props.subtitle}.</div>
            </div>
        </Tooltip>
    );
}