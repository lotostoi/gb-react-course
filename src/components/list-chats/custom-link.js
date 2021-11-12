import {
    Typography,
    ListItemButton,
} from '@mui/material';
import { NavLink } from "react-router-dom";

const CustomLink = ({ item }) => {
 
    return (
    
       <ListItemButton
            component={NavLink}
            to={`/chats/${item.name.toString().toLowerCase().replace(' ', '_')}`}
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

            <Typography
                sx={{
                    color: 'primary.contrastText',
                }}
            >
                {item.name}
            </Typography>

        </ListItemButton>
    )
}

export default CustomLink;