import { useState } from 'react';
import { Box } from '@mui/material';
import ListChats from '../components/list-chats';
import ChatArea from '../components/chat-area'
import { Switch, Route } from "react-router-dom";


export default function () {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px 0',

        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <ListChats></ListChats>

                <Switch>
                    <Route path='/chats/:chatName' component={ChatArea} />
                </Switch>
            </Box>

        </Box>
    )
}

