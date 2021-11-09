import React from 'react'
import {
    Box,
    ListSubheader,
    List,
} from '@mui/material';
import { Switch } from "react-router-dom";

import CustomLink from './custom-link';

import rooms from '../../views/rooms'

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
                    rooms.map(item => <CustomLink item={item} key={item.id} />)
                }
            </List>
        </Box>
    )
}

export default ListChats;