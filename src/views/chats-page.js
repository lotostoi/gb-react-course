import { useState } from 'react';
import { Box } from '@mui/material';
import ListChats from '../components/list-chats';
import ChatArea from '../components/chat-area'
import SendMessage from '../components/send-message'
import { useParams } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";


export default function () {

    const [listMessages, addMessageToList] = useState([])

    const addMessage = ({ id, message }) => {
        addMessageToList([...listMessages, { id, message }])
    }



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

            <SendMessage addMessage={addMessage}></SendMessage>
        </Box>
    )
}

