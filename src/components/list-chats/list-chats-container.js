import React from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { addChat } from '../../store/chats/actions'
import uniqid from 'uniqid'

import { getChats } from '../../store/chats/selectors';

import ListChatsView from './list-chats-view'


const ListChatsContainer = () => {

    const chats = useSelector(getChats, shallowEqual)
    const dispatch = useDispatch()
    const inputChatName = useRef(null)
    const _addChat = () => {
        const name = inputChatName.current.value
        if (!name || chats.find((chat) => chat.name === name)) return
        dispatch(addChat({ id: uniqid(), name }))
    }
    return <ListChatsView {...{_addChat, chats, inputChatName}}/>
}

export default ListChatsContainer;