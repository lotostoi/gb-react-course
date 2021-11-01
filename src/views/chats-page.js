import {useState} from 'react';
import {Box, Typography} from '@mui/material';
import ListChats from '../components/list-chats';
import ChatArea from '../components/chat-area'
import SendMessage from '../components/send-message'
import {useParams} from 'react-router-dom'

import rooms from '../store/rooms'
import P404 from '../components/error404'

const chatsPage = () => {

    const {chatName} = useParams()
    const [listMessages, addMessageToList] = useState([])
    const addMessage = ({id, message}) => {
        addMessageToList([...listMessages, {id, message}])
    }

    const room = () => {
        const _room = rooms.find(({title}) => title.toString().toLowerCase().replace(' ', '_') === chatName)
        if (_room && chatName) {
            return <ChatArea listMessages={listMessages} room={_room}></ChatArea>
        } else {
            return <P404></P404>
        }
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
                <ListChats rooms={rooms}></ListChats>
                {room()}
            </Box>
            <SendMessage addMessage={addMessage}></SendMessage>
        </Box>
    )
}

export default chatsPage;