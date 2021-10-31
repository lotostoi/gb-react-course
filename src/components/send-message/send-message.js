import {useRef, useEffect} from 'react'
import uniqid from 'uniqid'

import {
    Box,
    Button,
    Typography,
    Modal,
    TextField
} from '@mui/material';

const SendMessage = ({addMessage}) => {
    const inputElementRef = useRef(null)
    const formRef = useRef(null)

    useEffect(() => {
        inputElementRef.current.querySelector('input').focus()
    }, [])

    const sendMessage = () => {
        const inputElement = inputElementRef.current.querySelector('input')
        addMessage(
            {
                id: uniqid(),
                message: inputElement.value
            }
        )
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
                    margin: '0 auto',
                }}
                onClick={sendMessage}
            >
                Send Message
            </Button>
        </Box>
    )
}
export default SendMessage;