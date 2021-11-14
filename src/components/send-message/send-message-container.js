import { useRef, useEffect } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux';

import { addMessageWithThunk } from '../../store/messages/actions'
import SendMessageView from './send-message-view'


const SendMessage = ({ idChat }) => {
    const inputElementRef = useRef(null)
    const formRef = useRef(null)

    useEffect(() => {
        inputElementRef.current.focus()
    })

    const dispatch = useDispatch()

    const sendMessage = (e) => {
        e.preventDefault()
        const inputElement = inputElementRef.current

        dispatch(addMessageWithThunk({
            idChat,
            message: {
                id: uniqid(),
                user: 'Alexander',
                message: inputElement.value
            }
        }))
        
        formRef.current.reset()
    }

    return <SendMessageView {...{ inputElementRef, formRef, sendMessage }} />
}
export default SendMessage;