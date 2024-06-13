import React, {useEffect, useRef} from 'react';
import '../styles/ui_componentens/chatBox.css'
import {Box} from "@mui/material";
import {ChatBlock} from "./ChatBlock";
import {Prompt} from "../types";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tooltip from "@mui/material/Tooltip";
import '../styles/ui_componentens/arrowBack.css';


interface ChatBoxProps {
    prompts: Prompt[],
    characterBehavior: 'idle' | 'idleBlinking' | 'thinking' | 'idea',
    onClickBack(): void
}

export const ChatBox: React.FC<ChatBoxProps> = (props: ChatBoxProps) => {
    const scrollRef = useRef(null);

    useEffect((): void => {
      scrollToBottom()
    }, [props.prompts])

    const scrollToBottom = (): void => {
        if (scrollRef.current) {
            (scrollRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    };

    const initAnswer: string =
        'Hallo, als GreenAssistant stehe ich Dir zur Seite, um all Deine Fragen rund um ' +
        'Nachhaltigkeit in den Bereichen Ökologie, Wirtschaft, Soziales und Kultur zu beantworten. Du kannst deine ' +
        'Frage einfach per Tastatur in das Textfeld unten eingeben, oder über den Pfeil links oben zur Spracheingabe zurückkehren.'

    return(
        <div>
            <div className={'arrow-back-container'}>
                <Tooltip arrow title={'Zurück zum Sprachchat'}>
                    <IconButton onClick={() => props.onClickBack()}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Tooltip>
            </div>
            <div className={'chat-content'}>
                <Box>
                    <ChatBlock isInitChatBlock prompt={{question: '', answer: initAnswer}} characterBehavior={props.characterBehavior}/>
                    {props.prompts.map((currentPrompt: Prompt, index: number) => {
                        return(
                           <ChatBlock key={index} prompt={currentPrompt} characterBehavior={props.characterBehavior}
                           />
                        )
                    })}
                </Box>
            </div>
            <div ref={scrollRef}></div>
        </div>
    )
}