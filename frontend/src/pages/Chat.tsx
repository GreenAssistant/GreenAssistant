import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../axios";
import { notify } from "../ui_components/Notifications";
import {Prompt} from "../types";
import {SessionManager} from "../manager/SessionManager";
import { ValidationManager } from "../manager/ValidationManager";
import {Character} from "../ui_components/Character";
import {ChevronOpenTextInput} from "../ui_components/ChevronOpenTextInput";
import TextInputDrawer from "../ui_components/TextInputDrawer";
import {ChatBox} from "../ui_components/ChatBox";
import {Microphone} from "../ui_components/Microphone";
import '../styles/pages/home.css'


export const Chat = () => {
    const backendURL: string = 'greenAssistant/';
    const sessionManager: SessionManager = new SessionManager()
    // if this value is changed, change it in backend/managers/validation_manger as well!
    const maxLengthTextfield: number = 300;
    const validationManager: ValidationManager = new ValidationManager();
    const [showTextfield, setShowTextfield] = useState<boolean>(false);
    const [showCharacter, setShowCharacter] = useState<boolean>(true);
    const [newQuestion, setNewQuestion] = useState<string>('');
    const [textInputValue, setTextInputValue] = useState<string>('');
    const [prompts, setPrompts] = useState<Prompt[]>([]);
    const [characterBehavior, setCharacterBehavior] =
        useState<'idle' | 'idleBlinking' | 'thinking' | 'idea'>('idleBlinking')

    useEffect((): void => {
        getFromSession()
        sessionManager.generate('clientID')
    }, [])

    const getFromSession = (): void => {
        let currentPrompts: Prompt[] = [];
        const storedQuestion = sessionStorage.getItem('prompts');
        if (storedQuestion !== null) {
            currentPrompts = JSON.parse(storedQuestion);
        }
        if (sessionStorage.length === 0) {
            setPrompts([])
            return
        }
        setPrompts(currentPrompts);
    }

    const storeInSession = (response: any): Promise<void> => {
        sessionStorage.removeItem('prompts')
        sessionStorage.setItem('prompts', JSON.stringify(response.data))

        return new Promise(resolve => {
            resolve();
        })
    }

    const sendQuestion = (question: string, isWritten: boolean): void => {
        const sanitizedInput: string = validationManager.validate(question);
        if (sanitizedInput === null || sanitizedInput === undefined || sanitizedInput === "") {
            if (isWritten) {
                notify.warning("Bitte überprüfe Deine Eingabe, deine Frage kann nicht leer sein.");
            }
            return
        }
        setCharacterBehavior('thinking')
        AxiosInstance.post(
            backendURL,
            {
                question: sanitizedInput,
                isWritten: isWritten
            },
            {headers:{'X-CSRFToken': sessionManager.get('clientID')}}
        ).then((response): void => {
            if (!isWritten) {
                 downloadAudioFile().then();
            }
            storeInSession(response).then((response: void): void => {
                getFromSession()
            });
            setCharacterBehavior('idea');
        }).catch((response): void => {
            if (response.code === "ERR_NETWORK") {
                notify.error("Server konnte nicht erreicht werden.");
                setCharacterBehavior('idleBlinking')
            } else {
                console.log(response);
            }
        });
    };

    const downloadAudioFile = async (): Promise<void> => {
       try {
           const response = await AxiosInstance.get(backendURL, {
               responseType: 'blob',
               headers: {'X-CSRFToken' : sessionManager.get('clientID')},
           });
           const blob: Blob = new Blob([response.data], { type: response.headers['content-type'] });
           const url: string = URL.createObjectURL(blob);
           const audio: HTMLAudioElement = new Audio(url);
           await audio.play();
       } catch (error) {
           notify.info('Werfe einen Blick in den Chatverlauf')
           console.error('Error downloading file:', error);
       }
    }

    return (
        <div className={"pages-content"}>
            {showCharacter && (
                <div>
                    <Character
                        behavior={characterBehavior}
                        showDefaultQuestion
                        onClickTopLeft={() => sendQuestion("Was ist Ökologie in Augsburg", false)}
                        onClickBottomLeft={() => sendQuestion("Was ist Soziales in Augsburg", false)}
                        onClickTopRight={() => sendQuestion("Was ist Wirtschaft in Augsburg", false)}
                        onClickBottomRight={() => sendQuestion("Was ist Kultur in Augsburg", false)}
                    />
                    <Microphone onMouseUp={(transcript:string): void => {
                        sendQuestion(transcript, false);
                    }}/>
                </div>
            )}
            {!showCharacter &&
                <ChatBox
                    prompts={prompts}
                    characterBehavior={characterBehavior}
                    onClickBack={():void => {
                        setShowTextfield(false);
                        setShowCharacter(true);
                    }}
                />}
            {!showTextfield && (
                <ChevronOpenTextInput
                    tooltip={'Tastatureingabe öffnen'}
                    onChevronClick={(event): void => {
                        setShowTextfield(true);
                    }}
                />
            )}
            {/* On screens with small height, the input drawer and chevronopentextinput shouldn't overlay the microphone icon and its text */}
            <div className='padding-bottom'></div>
            <TextInputDrawer
                open={showTextfield}
                value={textInputValue}
                placeholder={"Stell mir hier einfach eine Frage ..."}
                maxLength={maxLengthTextfield}
                onChange={(event): void => {
                    if(event.target.value.length === maxLengthTextfield){
                        notify.warning(`Deine Frage kann nicht länger als ${maxLengthTextfield} Zeichen sein!`);
                    }
                    setTextInputValue(event.target.value);
                    setNewQuestion(event.target.value);
                }}
                onButtonClick={(): void => {
                    sendQuestion(newQuestion, true);
                    setTextInputValue('');
                }}
                onKeyDown={(event): void => {
                    if(event.key === "Enter"){
                        event.preventDefault();
                        event.stopPropagation();
                        sendQuestion(newQuestion, true);
                        setTextInputValue('');
                    }
                }}
                onTextFieldClick={() => setShowCharacter(false)}
                onClose={(): void => {
                    setShowTextfield(false);
                    setShowCharacter(true);
                }}
            />
        </div>
    );
};


