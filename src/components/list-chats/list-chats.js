import React from 'react'
import uniqid from 'uniqid'
import {
    Box,
    Button,
    Typography,
    Modal,
    TextField,
    ListSubheader,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {NavLink} from "react-router-dom";


const ListChats = ({rooms}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '250px',
                bgcolor: 'primary.light',
                borderRadius: '5px',
            }}
        >
            <List
                sx={{
                    width: '100%',
                    borderRadius: '5px',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        sx={{
                            bgcolor: 'primary.light',
                            color: 'primary.contrastText',
                            borderRadius: '5px',
                        }}
                    >
                        Rooms
                    </ListSubheader>
                }
            >
                {
                    rooms.map(item => {
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
                                    {item.icon}
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
                    })
                }
            </List>
        </Box>
    )
}

export default ListChats;