import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {drawerWidth} from "../types";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";


interface NavigationTopBarProps extends MuiAppBarProps {
    open?: boolean;
    isMobile?: boolean;
}

export const NavigationTopBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isMobile',
})<NavigationTopBarProps>(({theme, open, isMobile }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
    ...(open && !isMobile && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
     }),
}));