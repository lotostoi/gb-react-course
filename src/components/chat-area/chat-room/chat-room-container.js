import { useCallback, useRef,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import ChatRoomView from './chat-room-view'
import { getMessages } from '../../../store/messages/selectors';
import { deleteMessages } from '../../../store/messages/actions';

export default function ({ name, id }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { messages } = useSelector(getMessages)
    const chatAreaRef = useRef(null)

    const _deleteMessages = useCallback(() => {
        dispatch(deleteChat({ id }))
        dispatch(deleteMessages({ id }))
        history.push("/chats");
    }, [id])

    useEffect(
        () => {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
        }
    )
    return <ChatRoomView {...{ name, chatAreaRef, messages, id, _deleteMessages }} />
}