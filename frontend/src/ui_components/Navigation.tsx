import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ContrastIcon from "@mui/icons-material/Contrast";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Logo from '../images/Logo.png';
import LogoDark from '../images/Logo_dark.png';
import LogoContrast from '../images/Logo_contrast.png';
import '../styles/ui_componentens/navigation.css';
import '../styles/global.css';
import {ListItem, Theme, useMediaQuery} from '@mui/material';
import { DarkLightModeSwitch } from './DarkLightModeSwitch';
import { IThemeContext, IThemeMode } from '../theme-context/types';
import { ThemeContext } from '../theme-context';
import { useContext } from 'react';
import {baseURL, drawerWidth} from "../types";
import {NavigationTopBar} from "./NavigationTopBar";
import {NavigationDrawerHeader} from "./NavigationDrawerHeader";
import {NavigationStyleComponent} from "./NavigationStyleComponent";


interface NavigationProps {
    children: any
}

export const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
    const [open, setOpen] = React.useState(false);
    const isMobile: boolean = useMediaQuery(useTheme().breakpoints.down('sm'));
    const theme: Theme = useTheme();
    const context: IThemeContext = useContext(ThemeContext) as IThemeContext;
    const { themeMode, switchThemeMode, handleZoomIn, isZoomIn } =
    context || { themeMode: IThemeMode.LIGHT, switchThemeMode: (): void => {}, handleZoomIn: (): void => {}};

    const toggleDrawer = (): void => {
        setOpen(!open);
    };

    const handleSwitchTheme = (mode: IThemeMode): void => {
        switchThemeMode(mode);
    };

    const getLogoSrc = (): string => {
        if (theme.palette.mode === 'dark') {
            return LogoDark;
        } else if (document.querySelector("body")?.getAttribute('theme') === 'contrast') {
            return LogoContrast;
        } else {
            return Logo;
        }
    }

    return (
        <Box sx={{ display: 'flex'}}>
        <CssBaseline/>
            <NavigationTopBar
                position="fixed"
                open={open}
                isMobile={isMobile}
                style={{
                    backgroundColor: theme.palette.background.default,
                    color: '#000000',
                    boxShadow: 'none',
                    backgroundImage: 'none'
                }}>
                <Toolbar style={{paddingRight: '10px', paddingLeft: '10px'}}>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1}} component="div">
                        <Tooltip title={'Back to Home'} arrow>
                            <Button
                              color="inherit"
                              component={Link}
                              to="/">
                                <img src={getLogoSrc()}
                                alt="Logo" style={{ height: '50px', marginRight: '10px' }}/>
                            </Button>
                        </Tooltip>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={toggleDrawer}
                        sx={{
                            backgroundColor: 'var(--dark-green)',
                            color: 'var(--light-green)',
                            borderTopRightRadius: '0px',
                            borderBottomRightRadius: '0px',
                            height: '60px',
                            width: '60px',
                            marginTop: '10px',
                            ':hover': {
                                backgroundColor: 'var(--dark-green)',
                                color: 'var(--light-green)',
                            },
                        }}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </NavigationTopBar>
            <NavigationStyleComponent open={open} isMobile={isMobile}>
                <NavigationDrawerHeader/>
                {props.children}
            </NavigationStyleComponent>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor: 'var(--dark-green)',
                        border: 'none',
                        backgroundImage: 'none'
                    },
                }}
                variant={isMobile ? "temporary" : "persistent"}
                anchor="right"
                open={open}
                onClose={toggleDrawer}>
                <NavigationDrawerHeader/>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%'
                    }}>
                    <div>
                        <ListItemButton component={Link} to="/">
                            <ListItemText>
                                <Typography className='navigation-text-bold'>Chat</Typography>
                            </ListItemText>
                        </ListItemButton>
                    </div>
                    <div>
                        <ListItemButton onClick={(): void => isZoomIn()? handleZoomIn(true) : handleZoomIn(false)}>
                            <FormatSizeIcon className='navigation-icon'/>
                            <ListItemText primary="Schriftgröße anpassen" className='navigation-text'/>
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => {
                                handleSwitchTheme(
                                    themeMode === IThemeMode.CONTRAST
                                        ? IThemeMode.LIGHT
                                        : IThemeMode.CONTRAST
                                )
                            }}>
                            <ContrastIcon className='navigation-icon'/>
                            <ListItemText primary="Kontrastversion" className='navigation-text'/>
                        </ListItemButton>
                        <ListItem>
                            <ListItemText primary="Dark-/Lightmode" className='navigation-text'/>
                            <DarkLightModeSwitch
                                sx={{ m: 1 }}
                                theme={theme}
                                checked={theme.palette.mode === 'dark'}
                                onClick={(): void => {
                                    handleSwitchTheme(
                                        themeMode === IThemeMode.DARK
                                            ? IThemeMode.LIGHT
                                            : IThemeMode.DARK
                                    )
                                }}/>
                        </ListItem>
                        <hr className={'navigation-separator'}/>
                        <ListItemButton component={Link} to='/datenschutz'>
                            <ListItemText primary="Datenschutz" className='navigation-text'/>
                        </ListItemButton>
                        <ListItemButton component={Link} to="/impressum">
                            <ListItemText primary="Impressum" className='navigation-text'/>
                        </ListItemButton>
                        <ListItemButton component={Link} to="/lizenz">
                            <ListItemText primary="Lizenz" className='navigation-text'/>
                        </ListItemButton>
                        <ListItemButton component={Link} to={baseURL + 'dashboard'}>
                            <ListItemText primary="Administration" className='navigation-text'/>
                        </ListItemButton>
                    </div>
                </div>
            </Drawer>
        </Box>
    );
};
