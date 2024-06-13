import React from "react";
import '../styles/ui_componentens/character.css'
import MicIcon from '@mui/icons-material/Mic';
import IconButton from "@mui/material/IconButton";
import '../styles/global.css'
import '../styles/ui_componentens/microphone.css'
import {Introduction} from "./Introduction";
// @ts-ignore
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {notify} from "./Notifications";

interface MicrophoneProps {
    onMouseUp(transcript: string): void
}

export const Microphone: React.FC<MicrophoneProps> = (props: MicrophoneProps) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        notify.error('Dein Browser unterstützt keine Spracherkennung, bitte verwende Safari oder Chrome.')
        return <div></div>;
    }
    const startListening = (): void => {
        resetTranscript();
        SpeechRecognition.startListening({ continuous: true });
    }

    const stopListening = (): void => {
        SpeechRecognition.stopListening();
        props.onMouseUp(transcript);
        resetTranscript();
    }

    return (
        <div>
            <div className={'microphone-container'}>
                <IconButton
                    onTouchStart={startListening}
                    onMouseDown={startListening}
                    onTouchEnd={stopListening}
                    onMouseUp={stopListening}
                    className={'microphone-button'}
                >
                    <MicIcon className={'microphone-icon'}/>
                </IconButton>
            </div>
            <div className={'microphone-container microphone-transcript'}>
                {listening &&
                    <div>
                        <div>
                            <b>{transcript}</b>
                        </div>
                    </div>
                }
                {listening && !transcript &&
                    <div>
                        <b>Ich höre dir zu!</b>
                    </div>
                }
                {!listening &&
                    <div>
                        <Introduction message={"Zum Aufnehmen halten, zum Abschicken loslassen"}/>
                    </div>
                }
            </div>
        </div>
    );
}