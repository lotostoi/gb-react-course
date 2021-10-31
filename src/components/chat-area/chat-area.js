import React, {useState, useRef, useEffect} from 'react';
import {Box, Button, Stack, Paper} from '@mui/material';
import {styled} from '@mui/material/styles';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const ChatArea = ({listMessages}) => {
    const chatAreaRef = useRef(null)
    useEffect(
        () => {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
        }
        , [listMessages]
    )
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
            <Stack spacing={2}>
                {
                    listMessages.map(({id, message}) => {
                        return (
                            <Item key={id}>
                                <strong> User: </strong> {message}
                            </Item>
                        )
                    })
                }
            </Stack>

        </Box>
    )
}

export default ChatArea;