import React, { useRef, useEffect } from 'react';
import { Box, Stack, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { deleteChat } from '../../store/chats/actions'

import { getMessages } from '../../store/messages/selectors';
import { getChats } from '../../store/chats/selectors';

import P404 from '../error404'

import SendMessage from '../send-message';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));


const ChatArea = () => {

    const chats = useSelector(getChats, shallowEqual)

    const { chatName } = useParams()

    const room = chats.find(({ name }) => name.toString().toLowerCase().replace(' ', '_') === chatName)

    return (
        <div style={{ width: 'calc(100% - 262px)', }}>
            <Box component="div"
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '5px',
                    border: '1px solid blue',
                    borderColor: 'primary.light',
                    width: '100%',
                    height: '85vh',
                    overflow: 'auto',
                    boxSizing: 'border-box'
                }}>

                {
                    room ? <ChatRoom name={room.name} id={room.id} /> : <P404 />
                }
            </Box>
        </div >
    )
}


function ChatRoom({ name, id }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const {messages} = useSelector(getMessages, shallowEqual)

    // возможно еще пригодится
    const chatAreaRef = useRef(null)
    useEffect(
        () => {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
        }
    )
    return (
        <>
            <div style={{
                display: 'flex',
                margin: '0 0 10px 0'
            }}>
                <p>
                    <strong>Room:</strong>
                    <span style={{
                        marginLeft: '10px'
                    }}>
                        {name}
                    </span>
                </p>
                <button style={{ margin: '0 0 0 auto' }} onClick={() => {
                    dispatch(deleteChat({ id }))
                    history.push("/chats");
                }}> Delete chat</button>
            </div>

            <div
                ref={chatAreaRef}
                style={{
                    height: '80vh',
                    overflow: 'auto'
                }}>
                {`${id}` in messages && messages[id].map(({ id, message }) => {
                    return <Stack spacing={2} key={id} style={{ margin: '5px 0 0 0' }}>
                        {
                            <Item >
                                <strong> User: </strong> {message}
                            </Item>
                        }
                    </Stack>
                })}
            </div>
            <SendMessage idChat={id}></SendMessage>
        </>
    )
}


export default ChatArea;