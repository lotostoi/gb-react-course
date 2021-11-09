import React, { useRef, useEffect } from 'react';
import { Box, Stack, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom'

import rooms from '../../views/rooms'

import P404 from '../error404'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));



const ChatArea = () => {

    const chatAreaRef = useRef(null)
    // возможно еще пригодится
    useEffect(
        () => {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
        }
        , []
    )

    const { chatName } = useParams()

    const room = rooms.find(({ title }) => title.toString().toLowerCase().replace(' ', '_') === chatName)

    return (
        <Box component="div"
            ref={chatAreaRef}
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '5px',
                border: '1px solid blue',
                borderColor: 'primary.light',
                width: 'calc(100% - 320px)',
                height: '70vh',
                overflow: 'auto'
            }}>

            {
                room ? <ChatRoom name={room.title} /> : <P404 />
            }

        </Box>
    )
}


function ChatRoom({ name }) {
    return (
        <>
            <Typography
                component='h2'
            >
                <strong>Room:</strong>
                <span style={{
                    marginLeft: '10px'
                }}>
                    {name}
                </span>
            </Typography>
            <Stack spacing={2}>
                {
                    <Item >
                        <strong> User: </strong> some message ...
                    </Item>
                }
            </Stack>

        </>
    )
}


export default ChatArea;