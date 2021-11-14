import { Stack, styled,Paper } from '@mui/material';
import SendMessage from '../../send-message';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default function ({ name, chatAreaRef, messages, id, _deleteMessages }) {
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
                <button className="btn btn-danger" style={{ margin: '0 0 0 auto' }} onClick={_deleteMessages}> Delete chat</button>
            </div>
            <div
                ref={chatAreaRef}
                style={{
                    height: '80vh',
                    overflow: 'auto'
                }}>
                {messages && `${id}` in messages && messages[id].map(({ id, message, user }) => {
                    return <Stack spacing={2} key={id} style={{ margin: '5px 0 0 0' }}>
                        {
                            <Item >
                                <strong> {user}: </strong> {message}
                            </Item>
                        }
                    </Stack>
                })}
            </div>
            <SendMessage idChat={id}></SendMessage>
        </>
    )
}