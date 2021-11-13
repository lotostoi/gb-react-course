import { useRef, useEffect } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux';

import { addMessage } from '../../store/messages/actions'

import {
    Box,
    Button,
    TextField
} from '@mui/material';

const SendMessage = ({ idChat }) => {
    const inputElementRef = useRef(null)
    const formRef = useRef(null)

    useEffect(() => {
        inputElementRef.current.querySelector('input').focus()
    })

    const dispatch = useDispatch()

    const sendMessage = (e) => {
        e.preventDefault()
        const inputElement = inputElementRef.current.querySelector('input')

        dispatch(addMessage({
            idChat,
            message: {
                id: uniqid(),
                message: inputElement.value
            }
        }))

        formRef.current.reset()
    }

    return (
        <Box
            component='form'
            ref={formRef}
            sx={{
                display: 'flex',
                padding: '10px',
                border: '1px solid blue',
                borderColor: 'primary.light',
                borderRadius: '5px',
                marginTop: '10px',
                justifyContent: 'space-between'
            }}
        >
            <TextField id="message"
                label="Your message"
                variant="outlined"
                type="text"
                ref={inputElementRef}
                sx={{
                    width: '80%'
                }}
            />
            <Button
                variant="contained"
                sx={{
                    width: '210px',
                    color: 'primary.contrastText',
                    backgroundColor: 'primary.light',
                    margin: '0 10px 0 5px',
                }}
                onClick={sendMessage}
            >
                Send Message
            </Button>
        </Box>
    )
}
export default SendMessage;