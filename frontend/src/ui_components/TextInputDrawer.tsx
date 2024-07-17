import React from 'react';
import {Drawer, IconButton, InputAdornment, TextField, useMediaQuery} from '@mui/material';
import Tooltip from "@mui/material/Tooltip";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/ui_componentens/textInputDrawer.css';
import '../styles/global.css';

interface TextInputDrawerProps {
    onChange(event: any): void,
    onButtonClick(): void,
    onKeyDown(event: any): void,
    onTextFieldClick?(): void,
    onClose(): void,
    maxLength?: number,
    backgroundColor?: string,
    drawerWidth?: string,
    open: boolean,
    placeholder: string,
    value: string
}


const TextInputDrawer: React.FC<TextInputDrawerProps> = (props: TextInputDrawerProps) => {

    const isMobile = useMediaQuery('(max-width:600px)');
    const isSmallTablet = useMediaQuery('(max-width:960px)');


    return (
        <div>
            <Drawer
                variant="persistent"
                anchor="bottom"
                open={props.open}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '& .MuiDrawer-paper': {
                        width: props.drawerWidth ? props.drawerWidth : '100%',
                        boxSizing: 'border-box',
                        backgroundColor: props.backgroundColor ? props.backgroundColor : 'var(--dark-green)',
                        left: 'auto',
                        right: 'auto',
                        textAlign: 'center'
                    },
                }}>
                <div className={'text-input-drawer-hidde'}>
                    <Tooltip title={'Eingabe verstecken'} arrow>
                        <IconButton onClick={props.onClose}>
                            <div className={'text-input-drawer-hidde'}><ExpandMoreIcon style={{ color: 'var(--light-green)'}}/></div>
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={'text-input-drawer-field'}>
                    <TextField
                        id={'prompt'}
                        name={'prompt'}
                        value={props.value}
                        placeholder={props.placeholder}
                        focused={false}
                        InputLabelProps={{
                            shrink: false,
                            disabled: true
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position={'end'}>
                                    <Tooltip title={'Send'} arrow>
                                        <IconButton
                                            id={'send'}
                                            color="inherit"
                                            onClick={props.onButtonClick}
                                            style={{color: 'var(--dark-green)'}}>
                                                <SendIcon/>
                                        </IconButton>
                                    </Tooltip>
                                </InputAdornment>
                            ),
                            style: {
                                borderRadius: '30px',
                                backgroundColor: 'var(--light-green)',
                                width: isMobile ? '340px' : isSmallTablet ? '440px' : '600px',
                            },
                        }}
                        inputProps={{
                            maxLength: props.maxLength ?? 300,
                            onKeyDown: props.onKeyDown
                        }}
                        onChange={(event) => props.onChange(event)}
                        onClick={props.onTextFieldClick}
                    />
                </div>
            </Drawer>
        </div>
    );
};

export default TextInputDrawer;