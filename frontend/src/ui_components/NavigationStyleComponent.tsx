import {styled} from "@mui/material/styles";
import {drawerWidth} from "../types";


export const NavigationStyleComponent = styled(
    'main',
    { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isMobile'})<{
        open?: boolean;
        isMobile?: boolean;
}>(({ theme, open, isMobile }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: isMobile ? 0 : -drawerWidth,
    ...(open && !isMobile && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    marginRight: 0,
  }),
  position: 'relative',
}));