import React from 'react';
import '../styles/ui_componentens/chatBlock.css'
import Typography from "@mui/material/Typography";
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Character} from "./Character";
import {Prompt} from "../types";


interface ChatBlockProps {
    prompt: Prompt,
    characterBehavior: 'idle' | 'idleBlinking' | 'thinking' | 'idea',
    isInitChatBlock?: boolean
}

export const ChatBlock: React.FC<ChatBlockProps> = (props: ChatBlockProps) => {

    return (
        <>
            {!props.isInitChatBlock &&
                <div className={'chat-block-container'}>
                    <AccountCircle className='chat-block-icon'/>
                    <div className={'chat-block-content'}>
                        <Typography paragraph>
                            <b>Du:</b>
                            <br/>
                            {props.prompt.question}
                        </Typography>
                    </div>
                </div>
            }
            <div className={'chat-block-container'}>
                <Character behavior={props.characterBehavior} isIcon/>
                <div className={'chat-block-content'}>
                    <Typography paragraph>
                        <b>GreenAssistant:</b>
                        <br/>
                        {props.prompt.answer}
                    </Typography>
                </div>
            </div>
        </>
    );
}