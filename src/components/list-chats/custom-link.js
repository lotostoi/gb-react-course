import {
    Typography,
    ListItemButton,
    ListItemIcon,
} from '@mui/material';
import { NavLink } from "react-router-dom";

const CustomLink = ({ item }) => {
 
    return (
    
       <ListItemButton
            component={NavLink}
            to={`/chats/${item.title.toString().toLowerCase().replace(' ', '_')}`}
            key={item.id}
            activeClassName='active'
            sx={{
                borderBottom: '3px solid transparent',
                '&.active': {
                    backgroundColor: 'primary.dark',
                    borderBottom: '3px solid white'
                }
            }}
        >
            <ListItemIcon
                sx={{
                    color: 'primary.contrastText',
                }}
            >
                <item.icon />
            </ListItemIcon>
            <Typography
                sx={{
                    color: 'primary.contrastText',
                }}
            >
                {item.title}
            </Typography>

        </ListItemButton>
    )
}

export default CustomLink;