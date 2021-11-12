import React from 'react'
import {
    Box,
    ListSubheader,
    List,
} from '@mui/material';
import { useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { addChat } from '../../store/chats/actions'
import uniqid from 'uniqid'

import CustomLink from './custom-link';
import { getChats } from '../../store/chats/selectors';


const ListChats = () => {

    const chats = useSelector(getChats, shallowEqual)

    const dispatch = useDispatch()

    const inputChatName = useRef(null)

    const _addChat = () => {
        const name = inputChatName.current.value
        if (!name || chats.find((chat) => chat.name === name)) return
        dispatch(addChat({ id: uniqid(), name }))
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '250px',
                bgcolor: 'primary.light',
                borderRadius: '5px',
                height: '85vh',
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
                    chats.map(item => <CustomLink item={item} key={item.id} />)
                }
            </List>
            <input type="text" placeholder="add chat" style={{ margin: 'auto 5px 5px', height: '40px', borderRadius: '5px', outline: 'none', padding: '5px' }} ref={inputChatName} />
            <button style={{ margin: '5px' }} onClick={_addChat} style={{ margin: '5px', height: '40px', borderRadius: '5px', outline: 'none', padding: '5px' }}> add</button>
        </Box>
    )
}

export default ListChats;