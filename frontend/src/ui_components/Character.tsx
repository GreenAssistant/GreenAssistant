import React, {useEffect, useState} from "react";
import {Scale} from "../types";
import '../styles/ui_componentens/character.css'
import '../manager/CharacterManager'
import {CharacterManager} from "../manager/CharacterManager";
import {DefaultQuestion} from "./DefaultQuestion";


interface CharacterProps {
    scale?: Scale,
    spacingLeft?: string,
    isIcon?: boolean,
    behavior: 'idle' | 'idleBlinking' | 'thinking' | 'idea',
    showDefaultQuestion?: boolean
    onClickTopLeft?(): void
    onClickTopRight?(): void
    onClickBottomLeft?(): void
    onClickBottomRight?(): void
}

export const Character: React.FC<CharacterProps> = (props: CharacterProps) => {
    const characterManager: CharacterManager = new CharacterManager();
    const [currentScale, setCurrentScale] = useState<Scale>({
        height: 0,
        width: 0
    });

    useEffect((): void => {
        handleIconOrPic()
    },[props.isIcon]);

    const handleIconOrPic = (): void => {
        if (props.isIcon) {
            setCurrentScale({height: 30, width: 30});
        } else {
            setCurrentScale({height: 440, width: 440});
        }
    }

    return(
        <div
            className={'character-container'}
            style={{marginLeft: props.spacingLeft}}>
            {props.showDefaultQuestion &&
                <div className="default-question">
                    <DefaultQuestion
                        color={'var(--ecology)'}
                        title={'Ökologie'}
                        subtitle={'"Ökologie ist toll, erzähl mir mehr zu diesem Thema"'}
                        tooltip={'Klicke hier, um mehr über Ökologie in Augsburg zu erfahren.'}
                        onClick={() => props.onClickTopLeft && props.onClickTopLeft()}
                    />
                    <DefaultQuestion
                        color={'var(--social)'}
                        title={'Soziales'}
                        subtitle={'"Soziales ist toll, erzähl mir mehr zu diesem Thema"'}
                        tooltip={'Klicke hier, um mehr über Soziales in Augsburg zu erfahren.'}
                        onClick={() => props.onClickBottomLeft && props.onClickBottomLeft()}
                    />
                </div>
            }
            <img
               alt={'CharacterThinking'}
               src={characterManager.behave(props.behavior)}
               style={{
                   height: props.scale?.height ? props.scale?.height : currentScale.height,
                   width: props.scale?.width ? props.scale?.width : currentScale.width,
                }}

                className={!props.isIcon ? 'img' : ''}
            />
            {props.showDefaultQuestion &&
                <div className="default-question">
                    <DefaultQuestion
                        color={'var(--economy)'}
                        title={'Wirtschaft'}
                        subtitle={'"Wirtschaft ist toll, erzähl mir mehr zu diesem Thema"'}
                        tooltip={'Klicke hier, um mehr über Wirtschaft in Augsburg zu erfahren.'}
                        onClick={() => props.onClickTopRight && props.onClickTopRight()}
                    />
                    <DefaultQuestion
                        color={'var(--culture)'}
                        title={'Kultur'}
                        subtitle={'"Kultur ist toll, erzähl mir mehr zu diesem Thema"'}
                        tooltip={'Klicke hier, um mehr über Kultur in Augsburg zu erfahren.'}
                        onClick={() => props.onClickBottomRight && props.onClickBottomRight()}
                    />
                </div>
            }
        </div>
    )
}

