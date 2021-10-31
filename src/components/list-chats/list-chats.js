import React from 'react'
import uniqid from 'uniqid'
import {
    Box,
    Button,
    Typography,
    Modal,
    TextField,
    ListSubheader,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';

import AllInboxIcon from '@mui/icons-material/AllInbox';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const rooms = [
    {
        id: uniqid(),
        title: 'Main Room',
        icon: <AllInboxIcon></AllInboxIcon>,
    },
    {
        id: uniqid(),
        title: 'Sport',
        icon: <SportsHandballIcon></SportsHandballIcon>,
    },
    {
        id: uniqid(),
        title: 'News',
        icon: <FiberNewIcon></FiberNewIcon>
    },
    {
        id: uniqid(),
        title: 'Relations',
        icon: <ConnectWithoutContactIcon></ConnectWithoutContactIcon>
    },
]

const ListChats = () => {
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
                            <ListItemButton key={item.id}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.title}
                                    sx={{
                                        color: 'primary.contrastText',
                                    }}
                                />
                            </ListItemButton>
                        )
                    })
                }
            </List>
        </Box>
    )
}

export default ListChats;