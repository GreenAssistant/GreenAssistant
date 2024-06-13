import React from 'react';
import {IconButton} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import '../styles/ui_componentens/chevronOpenTextinput.css';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Tooltip from "@mui/material/Tooltip";


interface ChevronOpenTextInputProps {
    backgroundColor?: string,
    content?: string,
    tooltip: string,
    onChevronClick(event: any): void
}

export const ChevronOpenTextInput: React.FC<ChevronOpenTextInputProps> = (props: ChevronOpenTextInputProps) => {
    return(
        <div className={'chevron-open-container'}>
            <div className={'chevron-open-content'}>
                <Tooltip arrow title={props.tooltip}>
                    <IconButton
                        style={{
                            padding: '0px',
                            color: 'var(--light-gey)'
                        }}
                        onClick={(event) => props.onChevronClick(event)}>
                        <ExpandLessIcon/>
                    </IconButton>
                </Tooltip>
              <div style={{color: 'var(--light-grey)'}}>
                  <KeyboardIcon/>
              </div>
            </div>
        </div>
    );
}